const choices = ["rock", "paper", "scissor"];
const playerdisplay = document.getElementById("playerdisplay");
const compdisplay = document.getElementById("compdisplay");
const result = document.getElementById("result");
const playerscore = document.getElementById("playerscore");
const compscore = document.getElementById("compscore");
let pscore = 0;
let cscore = 0;


function play(playerchoice){
    const compchoice = choices[Math.floor(Math.random() *3)];
    let res = "";

    if(playerchoice === compchoice){
        res = "TIE!";
    }
    else{
        switch(playerchoice){
            case "rock":
                res = (compchoice === "scissor") ? "You Win" : "You Lose";
                break;
            case "paper":
                res = (compchoice === "rock") ? "You Win" : "You Lose";
                break;
            case "scissor":
                res = (compchoice === "paper") ? "You Win" : "You Lose";
                break;
        }
    }
    playerdisplay.textContent = `Player: ${playerchoice}`;
    compdisplay.textContent = `Computer: ${compchoice}`;
    result.textContent = res;

    switch(res){
        case "You Win":
            result.classList.add("greenText");
            pscore ++;
            playerscore.textContent = pscore;
            break;
        case "You Lose":
            result.classList.add("redText");
            cscore ++;
            compscore.textContent = cscore;
            break;
        case "TIE!":
            result.classList.add("tie");
            break;
        }
}