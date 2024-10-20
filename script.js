
const containerOfDivs = document.querySelector(".container")
const resizeButton = document.querySelector(".resizebutton")
const clearButton = document.querySelector(".clearbutton")


function newGrid(size){
    containerOfDivs.innerHTML="";

    const totalSquares = size * size
    const squareSize = 750/size

    for (i = 0; i<totalSquares;i++){
        const paintingDiv = document.createElement("div")
        paintingDiv.classList.add("gridbox")
        paintingDiv.style.width=squareSize+"px"
        paintingDiv.style.height =squareSize+"px"

        const paintingDivs = document.querySelectorAll(".gridbox");

        paintingDivs.forEach((paintingDiv)=>{
        paintingDiv.addEventListener("mouseover",() => {
            const randomColour = colourSet[getRandomColour()];
            paintingDiv.style.backgroundColor=randomColour
    });
    });

    containerOfDivs.appendChild(paintingDiv)

}}



colourSet = ['red','blue','green','orange','yellow','gray','purple','pink','indigo','violet','brown','aqua','lime']

function getRandomColour(){
    newColor = Math.floor(Math.random()*colourSet.length)
    return newColor
}

clearButton.addEventListener("click",() =>{

    const paintingDivs = document.querySelectorAll(".gridbox");
    paintingDivs.forEach(paintingDiv=>{
        paintingDiv.style.backgroundColor='';
        
    });
})

resizeButton.addEventListener("click",() =>{
    
    let inputSize = prompt("Enter the number of squares for each side of your grid (Max: 100):")
    const size = Math.min(Math.max(parseInt(inputSize), 1), 100)
    newGrid(size)

    

})

newGrid(16);