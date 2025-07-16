let boxes=document.querySelectorAll(".inbox");
let winnerbox=document.querySelector("#winner");
let ngmbtn=document.querySelector("a");
let msgbox=document.querySelector(".msgbox");
let outer=document.querySelector(".container");
let button=document.querySelector("#button");
let curr="X";
let winer;
let pstostrt=document.querySelector("#pstostrt");
let restart=document.querySelector("#restart");

pstostrt.addEventListener("click",()=>{
    pstostrt.classList.add("msgbox");
    outer.classList.add("box-cont");
    outer.classList.remove("msgbox");
    restart.classList.remove("msgbox");
    boxes.forEach((box)=>{
        box.classList.remove("msgbox");
    })
})

let i=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        i++;
        if(curr=="O"){
            box.innerHTML="O";
            winer="O"
            curr="X";
        }
        else{
            box.innerHTML="X";
            winer="X";
            curr="O";
        }
        box.classList.add("disable");
        if(winner()){
            winsteps();
        }
        else if(i==9){
            msgbox.setAttribute("id","msgbox2")
            winnerbox.innerHTML=`It's a Draw`;
            ngmbtn.innerHTML="NEW GAME";
            ngmbtn.setAttribute("id","newgame");
            button.setAttribute("id","restart2");
        }
    })
})


const winsteps=()=>{
    msgbox.setAttribute("id","msgbox2")
    winnerbox.innerHTML=`Player ${winer} WON`;
    ngmbtn.innerHTML="NEW GAME";
    ngmbtn.setAttribute("id","newgame");
    button.setAttribute("id","restart2");
    disable();
}

// const disable= ()=>{
//     for(let box of boxes){
//         box.classList.add("disable");    
//     }
// }
const disable=()=>{
        boxes.forEach((box)=>{
        box.classList.add("disable");
    })
}
    

let checking=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const winner=()=>{
    for(let check of checking){
        let a=boxes[check[0]].innerHTML;
        let b=boxes[check[1]].innerHTML;
        let c=boxes[check[2]].innerHTML;
        if(a=="X"&&b=="X"&&c=="X"||a=="O"&&b=="O"&&c=="O"){
            return true;
        }
    }
    return false;
}



