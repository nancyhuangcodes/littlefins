<h2>Frond end</h2>
<li>Sign up, login validation using frontend msg toast? Or use backend msg? &#10060;</li>
<li>Fetch API POST when user sign up &#10060;</li>
<li>Fetch API POST when user login, set token into localstorage &#10060;</li>
<li>Fetch API GET for user details, display on profile section (name, email, coin) &#10060;</li>
<li>Fetch API GET for all not redeemed vouchers, display on Rewards section &#10060;</li>
<li>Fetch API GET for the user's redeemed vouchers, display on My Rewards section &#10060;</li>
<li>Fetch API POST when the user clicks on "Redeem", get the voucher Id pass into param (Store userId, voucherId into Redeemed table) &#10060;</li>
<li>Fetch API POST when the user clicks on "Use now", get the voucher Id pass into param (Set used to true, set date to current date, decrease coin amount) &#10060;</li>
<li>Fetch API POST when the user ends the game, update coin balance, how to immediate reflect the new balance on frontend, need refresh page? &#10060;</li>
<li>How to display barcode?? &#10060;</li>
<li>How to increase user coin when the game end? &#10060;</li>
<li>User logout, remove token, coin from localstorage &#10060;</li>

<hr>

<h2>Back end</h2>
<li>Sign up (store user details, hashed pwd) &#9989;</li>
<li>Login (token) &#9989;</li>
<li>User update profile (set username, email) &#9989;</li>
<li>User redeem voucher (store user id & voucher id into redeem table) &#9989;</li>
<br/>

<li>Once user has redeemed the specific voucher, when user clicks "use now" button:</li>
<ul>
  <li>Set used attribute to true &#10060;</li>
  <li>Set date attribute to current date &#10060;</li>
  <li>Decrease coin amount based on voucher value &#10060;</li>
</ul>

<li>Unit testing &#10060;</li>
<li>Change User.java to Users.java, and update all project files that contains "User", will it affect the DB? &#10060;</li>

