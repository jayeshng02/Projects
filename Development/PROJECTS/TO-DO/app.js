let ip1 = document.querySelector("#add");
let list = document.querySelector("ol");
let body = document.querySelector("body");
let btn1 = document.querySelector("#addbtn");




btn1.addEventListener("click",function (){
    if(ip1.value!=""){
        let li = document.createElement("li");
        let b = document.createElement("button");
        li.innerText=ip1.value;
        b.innerText="x";
        b.classList.add("delete");
        li.appendChild(b);
        list.appendChild(li);
        ip1.value="";
    }else{
        alert("No Task to add");
    }
});

list.addEventListener("click", function (event){
if(event.target.nodeName=="BUTTON"){
    let listitem=event.target.parentElement;
    listitem.remove();
}
})