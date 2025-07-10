// let modeBtn=document.querySelector("#mode");
// let currMode="light";

// modeBtn.addEventListener("click",()=>{
//     if(currMode==='light'){
//         currMode="dark"
//         document.querySelector("body").style.backgroundColor="black";
//         document.querySelector("p").style.color="white";
//     }
//     else{
//         currMode="light"
//         document.querySelector("body").style.backgroundColor="white";
//         document.querySelector("p").style.color="black";
//     }

//     console.log(currMode)
// });

//you can also do this using classList...


let modeBtn=document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");

modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark"
       body.classList.add("dark");
       body.classList.remove("light");
    }
    else{
        currMode="light"
        body.classList.add("light");
        body.classList.remove("dark");
    }
})


