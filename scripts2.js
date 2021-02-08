
const divCont = document.getElementById("grid-container");
divCont.addEventListener("mouseover", transformCells);


let btn = document.querySelectorAll("input")
console.log(btn)
btn.forEach(colorBtn => colorBtn.addEventListener("click", colorPicker));


function makeGrid(rows, cols) {
    
    divCont.style.setProperty("--grid-rows",rows);
    divCont.style.setProperty("--grid-cols", cols);
    
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        divCont.appendChild(cell).className = "grid-area";
    }

}    

let color = "red";

function colorPicker(e){
    color = e.target.id;
    return color;
}

function transformCells(e){
    if(e.target.className == "gc"){
        return
    } else {
    e.target.style.backgroundColor = color;
    }
}


makeGrid(46, 46)

