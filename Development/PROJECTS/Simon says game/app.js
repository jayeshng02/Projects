let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let level=0;
let started =false;

let hScore=0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");


document.addEventListener("keypress",function (){
    if(started===false){
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
btn.classList.add("flash");
 setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
btn.classList.add("uflash");
 setTimeout(()=>{
        btn.classList.remove("uflash");
    },250);
}

function levelUp(){
userSeq=[];
level++;

 if(level>hScore){
        hScore=level
    }

h2.innerText=`Level ${level}`;
h3.innerText=`Highest Score : ${hScore}`;

let randIdx=Math.floor(Math.random() * 3);
let randColor=btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
gameFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerHTML=`Game Over! Your score is <b>${level}</b> <br>Press Any key to start`;
        let body = document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function (){
            body.style.backgroundColor="white";
        },200);
        reset();
    }
}

function reset(){
   
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor= btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(b of allBtns){
    b.addEventListener("click",btnPress);
}