const maps = 
[[
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "1", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "2", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
],[
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["2", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "1", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
],[
    ["1", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "2"]
],[
    ["0", "0", "0", "0", "0", "0", "0", "0", "1", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "2"]
],[
    ["1", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "2", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
]]



let counterMap = 0;
let mapEnCours = maps[counterMap];
let timerFirst = null;

const body = document.querySelector("body");
let scene;
const Xpos1Paraph = document.querySelector("#Xpos1");
const Ypos1Paraph = document.querySelector("#Ypos1");
const Xpos2Paraph = document.querySelector("#Xpos2");
const Ypos2Paraph = document.querySelector("#Ypos2");
const nbrCoups = document.querySelector("#nbrCoups");
const mapNumber = document.querySelector("#mapNumber");


const modalFin = document.querySelector("#modalFin");
const paraphFin = document.querySelector("#paraphFin");
const titleFin = modalFin.querySelector("h2");

const modalMatch = document.querySelector("#modalMatch");
const titleMatch = modalMatch.querySelector("h2");

let Xpos1 = 0;
let Ypos1 = 0;
let Xpos2 = 0;
let Ypos2 = 0;

let nombreDeCoups = 0;

let allCases = [];

function gridCreator(map)
{
    let rows = map[0].length;
    let cols = map.length;
    let counterRow = 1;
    let counterCol = 1;
    let box = null;
    let numberInBox = null;
    let nodeBox = null;
    
    scene = document.createElement("main");
    body.appendChild(scene);
    scene.setAttribute("id", "scene");
    scene.style.gridTemplateRows = "repeat(" + (rows) + ", 1fr)";
    scene.style.gridTemplateColumns = "repeat(" + (cols) + ", 1fr)";
    
    for(let nbrCase = 1; nbrCase <= parseInt(rows)*parseInt(cols); nbrCase++)
    {
        
        numberInBox = map[counterRow-1][counterCol-1];
        
        box = document.createElement("div");
        nodeBox = document.createTextNode(numberInBox);
        
        box.classList.add("box-" + (counterRow-1)/*4*/ + "-" + (counterCol-1)/*6*/ + "-" + numberInBox/*8*/);
        
        box.style.gridRowStart = "" + counterRow;
        box.style.gridColStart = "" + counterCol;
        box.style.border = "dotted 1px";
        
        scene.appendChild(box);
        box.appendChild(nodeBox);
        
        if(numberInBox === "1")
        {
            
            box.style.color = "blue";
            Xpos1Paraph.style.color = "blue";
            Ypos1Paraph.style.color = "blue";
            
            Xpos1Paraph.textContent = "Pos.X One = " + (counterCol-1);
            Ypos1Paraph.textContent = "Pos.Y One = " + (counterRow-1);
            
            Xpos1 = counterCol-1;
            Ypos1 = counterRow-1;
        }
        else if(numberInBox === "2")
        {
            
            box.style.color = "red";
            Xpos2Paraph.style.color = "red";
            Ypos2Paraph.style.color = "red";
            
            Xpos2Paraph.textContent = "Pos.X Two = " + (counterCol-1);
            Ypos2Paraph.textContent = "Pos.Y Two = " + (counterRow-1);
            
            Xpos2 = counterCol-1;
            Ypos2 = counterRow-1;
        }
        
        counterCol++;
        
        if(nbrCase % parseInt(cols) === 0)
        {
            
            counterRow++;
            counterCol = 1;
        }
        
        allCases.push(box);
    }
}

function deleteGrid(){
    for(let node of scene.children){
        scene.remove(node);
    }
    
}

let updateId;

function topDepart(){
    clearTimeout(modalMatchTimeOut);
    modalMatchTimeOut = null;
    modalMatch.style.display = "none";
    updateId = setInterval(updatePositions, 750);
}

function updatePositions(){
    
    let YMem1 = null;
    let YMemOther = null;
    
    let XMem1 = null;
    let XMemOther = null;
    
    
    let Xok = false;
    let Yok = false;
    
    //Conditions de fin
    if( 
        Xpos1 === Xpos2 && Ypos1 === Ypos2-1 || //1 au dessus de 2
        Xpos1 === Xpos2 && Ypos1 === Ypos2+1  || //1 au dessous de 2
        Xpos1 === Xpos2-1 && Ypos1 === Ypos2  || //1 à gauche de 2
        Xpos1 === Xpos2+1 && Ypos1 === Ypos2  || //1 à droite de 2
        Xpos1 === Xpos2-1 && Ypos1 === Ypos2-1 || //1 au dessus à gauche de 2
        Xpos1 === Xpos2+1 && Ypos1 === Ypos2-1 || //1 au dessus à droite de 2
        Xpos1 === Xpos2+1 && Ypos1 === Ypos2+1 || //1 au dessous à droite de 2
        Xpos1 === Xpos2-1 && Ypos1 === Ypos2+1 //1 au dessous à gauche de 2
        
    )
    {
            modalFin.style.display = "flex";
            titleFin.textContent = "Fin de la map n°" + (numMap+1);
            paraphFin.textContent = "Nombre de coups: " + nombreDeCoups;
        
            nombreDeCoups = 0;
            numMap++;
            counterMap++;
            
            
            
            deleteGrid();
            Yok = false;
            Xok = false;
            
            clearInterval(updateId);
            clearTimeout(timerFirst);
            timerFirst = null;
            updateId = null;
            
            if(counterMap < maps.length){
                
                newMap();
            }
            
    }
    else if(!Xok && !Yok)
    {
        if(Ypos1 === Ypos2 || Ypos1 === Ypos2-1 || Ypos1 === Ypos2+1){
            
            
        }else if(Ypos1 > Ypos2){ //1 dessous 2
            
            YMem1 = mapEnCours[Ypos1];
            YMemOther = mapEnCours[Ypos1-1];
            mapEnCours.splice(Ypos1-1, 2, YMem1, YMemOther);
            Ypos1--;
            
        }else if(Ypos1 < Ypos2){ //1 dessus 2
            YMem1 = mapEnCours[Ypos1];
            YMemOther = mapEnCours[Ypos1+1];
            mapEnCours.splice(Ypos1, 2, YMemOther, YMem1);
            Ypos1++;
        }
        
        if(Xpos1 === Xpos2 || Xpos1 === Xpos2-1 || Xpos1 === Xpos2+1){
            
            
        }else if(Xpos1 > Xpos2){
            
            XMem1 = mapEnCours[Ypos1][Xpos1];
            XMemOther = mapEnCours[Ypos1][Xpos1-1];
            mapEnCours[Ypos1].splice(Xpos1-1, 2, XMem1, XMemOther);
            Xpos1--;
            
        }else if(Xpos1 < Xpos2){
            XMem1 = mapEnCours[Ypos1][Xpos1];
            XMemOther = mapEnCours[Ypos1][Xpos1+1];
            mapEnCours[Ypos1].splice(Xpos1, 2, XMemOther, XMem1);
            Xpos1++;
        }
        
        if(Ypos1 === Ypos2 || Ypos1 === Ypos2-1 || Ypos1 === Ypos2+1){
            Yok = true;
        }
        
        if(Xpos1 === Xpos2 || Xpos1 === Xpos2-1 || Xpos1 === Xpos2+1){
            Xok = true;
        }
        
        nombreDeCoups++;
        nbrCoups.textContent = "Nombre de coups : " + nombreDeCoups;
        mapNumber.textContent = "Map N°: " + (numMap+1);
        deleteGrid();
        gridCreator(mapEnCours);
    }
}

function displayMatch(){
    modalFin.style.display = "none";
    titleMatch.textContent= "Map N°" + (numMap+1);
    modalMatch.style.display = "flex";
}


let numMap = 0;
let modalMatchTimeOut = null;

function newMap(){
    modalMatchTimeOut = setTimeout(displayMatch, 2000);
    mapEnCours = maps[counterMap];
    gridCreator(mapEnCours);
    timerFirst = setTimeout(topDepart, 4000);
}

window.addEventListener("DOMContentLoaded", function()
{
    
    newMap();
    
    
});