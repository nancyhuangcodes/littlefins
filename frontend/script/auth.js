// Function to authenticate the user via site's JWT token
function isAuthenticated() {

    const token = window.localStorage.getItem(_USERTOKEN); // Retrieve usertoken from local storage

    const expired = isTokenExpired(token); // Check the token's expiry 

    if (expired) // If expired, return (false)
        return;

    return token; // Else return token (usertoken)
}

// Function to check if the token has expired
function isTokenExpired(token) {

    if (!token) return true; // Return true if token passed in is undefined 

    const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT token (a base64-encoded JSON payload)

    const expirationTime = payload.exp; // Get the expiration time from the token payload
 
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    return expirationTime < currentTime; // Return true ONLY when currentTime is LESS THAN token's expirationTime
}

// Function to decode the user's email from the parameter
function decodeUser(token) {
    const arrToken = token.split(".");
    const decodedToken = JSON.parse(window.atob(arrToken[1]));
    const email = decodedToken.sub;
    return { email: email };
}

// ?? async / await
// ?? Async functions return results wrapped in a resolved Promise; for any errors, a 'rejected' Promise is returned 
// ?? In an async function, await pauses execution for the function until a Promise is resolved/rejected. 

// Funtion to login
async function login(formData = {}) {

    if (Object.entries(formData).length === 0) // Return if the object is empty
        return;

    try {
        const response = await fetch(_ENDPOINT_LOGIN, {                 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });


        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)); 
        await sleep(2000);

        if (response.ok) { // If response is ok
            // const token = Mock.getToken(true);               
            const data = await response.json(); 
            console.log(data)                                            
            window.localStorage.setItem(_USERTOKEN, data.token); // Store the string in localStorage with the key 'usertoken'
            window.localStorage.setItem(_USERROLE, data.role); 
           
            if(data.role==="ADMIN"){
                window.location = _ADMIN_URL;
            }
            if(data.role==="USER"){
                window.location = _PROFILE_URL;
            }
        }

        return; // Else return false

    } catch (error) {
        console.log("Exception error gotten is: ", error.message);
        return;
    }
}


function logout() {
    window.localStorage.removeItem(_USERTOKEN); // Store the string in localStorage with the key 'token'
    window.localStorage.removeItem(_USERROLE); // Store the string in localStorage with the key 'token'
    window.localStorage.removeItem("balance1"); // Remove localstorage balance1
    window.localStorage.removeItem("balance2"); // Remove localstorage balance2
    window.localStorage.removeItem("balance3"); // Remove localstorage balance3
    window.location = _HOME_URL; // Redirect the user to homepage
}


async function signup(formData = {}) {
    console.log(formData)
    if (Object.entries(formData).length === 0) // Return if the object is empty
        return;

    try {
        const response = await fetch(_ENDPOINT_SIGNUP, {                 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });


        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)); 
        await sleep(2000);

        if (response.ok) { 
            const data = await response.json(); 
            console.log(data)  
            window.localStorage.removeItem("balance1"); // Remove localstorage balance1
            window.localStorage.removeItem("balance2"); // Remove localstorage balance2
            window.localStorage.removeItem("balance3"); // Remove localstorage balance3                                    
            window.location = _LOGIN_URL;
        }

        return; // Else return false

    } catch (error) {
        console.log("Exception error gotten is: ", error.message);
        return;
    }
}
