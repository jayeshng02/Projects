let box = document.querySelector('.box');
let btn = document.querySelectorAll('.btn');
let menu = document.querySelector('#menu');
let body = document.querySelector('body');

let h1 =  document.querySelector('h1');


let count =1;
let start =false;
let first;
let second;

menu.addEventListener("click",function (event){
    h1.innerText="Tic - Tac - Toe";

if(event.target.id=='btnX'){
    start = true;
    first = event.target.innerText;
    second="O";
    menu.style.display="none";
}else if(event.target.id=='btnO'){
    start = true;
    first = event.target.innerText;
    second="X";
    menu.style.display="none";
}else{
    alert("SELECT properly");
}
});

box.addEventListener("click",function (event){

    if(event.target.classList.contains('btn') && count<10 && start){
      if(count%2==0 && (event.target.innerText=="")){
        count++;
        event.target.innerText=second;
        
        if(match(event.target.classList,second)){
        h1.innerHTML="<b>PLAYER 2 WINS</b><br>Click below to Restart";
        body.style.backgroundColor='green';
        setTimeout(()=>{
                    body.style.backgroundColor='azure';
                    reset();
                },500);
      }else if(count==10){
                h1.innerHTML="<b>The Game is Draw</b><br>Click below Restart";
                body.style.backgroundColor='red';
                setTimeout(()=>{
                    body.style.backgroundColor='azure';
                    reset();
                },500);
            }
      }else if((count%2!=0) && (event.target.innerText=="")){
        count++;
        event.target.innerText=first;
        
        if(match(event.target.classList,first)){
        h1.innerHTML="<b>PLAYER 1 WINS</b><br>Click below to Restart";
        body.style.backgroundColor='green';
        setTimeout(()=>{
                    body.style.backgroundColor='azure';
                    reset();
                },500);
      }else if(count==10){
                h1.innerHTML="<b>The Game is Draw</b><br>Click below Restart";
                body.style.backgroundColor='red';
                setTimeout(()=>{
                    body.style.backgroundColor='azure';
                    reset();
                },500);
            }
      }else{
        alert("Click in the Correct box");
      }

    }else{
       if(menu.style.display!="none"){
            alert("First select X AND O");
        }
    }

});

function match(list,txt){
  for(let i=0;i<list.length;i++){
    if(list[i]=='btn'){
        continue;
    }
    let ele = document.querySelectorAll("."+list[i]);
    let c=0;
    for(let j=0;j<ele.length;j++){
        if(ele[j].innerText==txt){
            c++;
        }
    }
    if(c==3){
        return true;
    }
  }
  return false;
}

function reset(){
    start=false;
    menu.style.display="";
    count=1;
    for(let i=0;i<btn.length;i++){
        btn[i].innerText="";
    }
}