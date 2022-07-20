//Home
let homePoint = 0;
const homeScore = document.getElementById("home-container__scores__figures");
const homeScoreBoard = document.getElementById("home-container__scores");

homeScore.innerText = 0
function homePlusOne(){
    homePoint += 1;
    homeScore.textContent = homePoint;
    if(homePoint > 99){
        homeScoreBoard.style.width = "fit-content"
    }
}

function homePlusTwo(){
    homePoint += 2;
    homeScore.textContent = homePoint;
    if(homePoint > 99){
        homeScoreBoard.style.width = "fit-content"
    }
}

function homePlusThree(){
    homePoint += 3;
    homeScore.textContent = homePoint;
    if(homePoint > 99){
        homeScoreBoard.style.width = "fit-content"
    }
}

function homeScoreReset(){
    homePoint = 0
    homeScore.textContent = homePoint;   
    homeScoreBoard.style.width = "100px"
}

//Guest
let guestPoint = 0;
const guestScore = document.getElementById("guest-container__scores__figures");
const guestScoreBoard = document.getElementById("guest-container__scores");

guestScore.innerText = 0
function guestPlusOne(){
    guestPoint += 1;
    guestScore.textContent = guestPoint;
    if(guestPoint > 99){
        guestScoreBoard.style.width = "fit-content"
    }
}

function guestPlusTwo(){
    guestPoint += 2;
    guestScore.textContent = guestPoint;
    if(guestPoint > 99){
        guestScoreBoard.style.width = "fit-content"
    }
}

function guestPlusThree(){
    guestPoint += 3;
    guestScore.textContent = guestPoint;
    if(guestPoint > 99){
        guestScoreBoard.style.width = "fit-content"
    }
}

function guestScoreReset(){
    guestPoint = 0
    guestScore.textContent = homePoint;
    guestScoreBoard.style.width = "100px"
}
