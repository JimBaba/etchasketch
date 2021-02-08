
let mouseIsDown = false;

if(window.addEventListener("mousedown", function mousePress(){
    mouseIsDown = true;
    console.log("Is down", mouseIsDown);
} 
));

if(window.addEventListener("mouseup", function mouseUp(){
    mouseIsDown = false;
    console.log("not pressed", mouseIsDown)
}
));


const divCont = document.getElementById("grid-container");

function makeGrid(rows, cols) {
    
    divCont.style.setProperty("--grid-rows",rows);
    divCont.style.setProperty("--grid-cols", cols);
    
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        divCont.appendChild(cell).className = "grid-area";
    }

}



divCont.addEventListener("mouseover", transformCells);


let btn = document.querySelectorAll("input")
btn.forEach(colorBtn => colorBtn.addEventListener("click", colorPicker));


    

let color = "red";

function colorPicker(e){
    color = e.target.id;
    return color;
}

function transformCells(e){
    if(e.target.className == "gc"){
        return
    } else if(mouseIsDown){
    e.target.style.backgroundColor = color;
    }
}



makeGrid(50, 50)

