



const parSVG = document.getElementById("BenjaminFigurSVG") 
const outersquareSVG = rectangleSVG(100, 100, "solid", "orange")
outersquareSVG.classList.add("outersquare")

const innersquareSVG = rectangleSVG(50, 50, "solid", "black")
innersquareSVG.classList.add("innersquare")

const lastsquareSVG = rectangleSVG(30, 30, "solid", "white")
lastsquareSVG.classList.add("lastsquare")

parSVG.appendChild(outersquareSVG)
parSVG.appendChild(innersquareSVG)
parSVG.appendChild(lastsquareSVG)




const parCanvas = document.getElementById("BenjaminFigurCanvas") 
const outersquare = rectangle(100, 100, "solid", "orange")
outersquare.classList.add("outersquare")

const innersquare = rectangle(50, 50, "solid", "black")
innersquare.classList.add("innersquare")

const lastsquare = rectangle(30, 30, "solid", "white")
lastsquare.classList.add("lastsquare")

parCanvas.appendChild(outersquare)
parCanvas.appendChild(innersquare)
parCanvas.appendChild(lastsquare)