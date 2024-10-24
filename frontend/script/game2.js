const storedBalance = localStorage.getItem('balance1');
console.log(storedBalance)
const balance=parseFloat(storedBalance)

let totalBalance2=balance;// Initialize total balance
const seashellDecision=3;
const pencilDecision=1;

const coinDiv = document.getElementById('coinDiv');
const seashellBtn = document.getElementById('seashellBtn');
const pencilBtn = document.getElementById('pencilBtn');
const displayBalance = document.getElementById('displayBalance');
const circle = document.getElementById('circle');

let decisionFlag=false

const orangeBgWhiteText = 'fs-5 text-decoration-none fw-bold orange-border rounded-5 px-md-5 px-4 py-2 text-white orange-bg';
const whiteBgOrangText = 'fs-5 text-decoration-none fw-bold orange-border rounded-5 px-md-5 px-4 py-2 orange-text';

const nextBtn=document.getElementById('nextBtn')
const prevBtn=document.getElementById('prevBtn')

const arrowEffect=document.getElementById('arrowEffect')

updateCoin();

function seashellBtnClicked() {
    seashellBtn.className = orangeBgWhiteText;
    pencilBtn.className = whiteBgOrangText;
    updateCoin(seashellDecision);
    circle.innerText = `-${seashellDecision}`;
    decisionFlag=true
    arrowEffect.className='fa-solid fa-chevron-right arrowEffect'
}

function pencilBtnClicked() {
    pencilBtn.className = orangeBgWhiteText;
    seashellBtn.className = whiteBgOrangText;
    updateCoin(pencilDecision);
    circle.innerText = `-${pencilDecision}`;
    decisionFlag=true
    arrowEffect.className='fa-solid fa-chevron-right arrowEffect'
}

function updateCoin(decision=0) {
    coinDiv.innerHTML = ''; // Clear existing coins
    for (let i = 0; i < totalBalance2; i++) {
        let coin = document.createElement('i');
        coin.className = 'fas fa-dollar-sign coin-icon fs-2 rounded-circle px-3 py-2';
        coinDiv.appendChild(coin);
    }
    totalBalance2 = balance - decision;
    displayBalance.innerText = totalBalance2; // Update the balance text
}


seashellBtn.addEventListener('click', seashellBtnClicked);
pencilBtn.addEventListener('click', pencilBtnClicked);

prevBtn.addEventListener('click',function(){
    window.location=_GAME1_URL
})

nextBtn.addEventListener('click',function(){
    if(!decisionFlag){
        return decisionAlert()
    }
    localStorage.setItem('balance2',totalBalance2)
    window.location=_GAME3_URL
    
})