



const parSVG = document.getElementById("terjeFigurSVG")
const background =  rectangleSVG(300, 200, "outline", "black") //rectangleSVG(300, 200, "outline", "black")
const circleSV = circleSVG(50, "solid", "red")


circleSV.classList.add("japan-circle-svg")

parSVG.appendChild(background)
parSVG.appendChild(circleSV)


const parCanvas = document.getElementById("terjeFigurCanvas") 
const circlCanvas = rectangle(300, 200, "outline", "black")
const circlCanvas1 = circle(50, "solid", "red")
circlCanvas1.classList.add("japan-circle")

parCanvas.appendChild(circlCanvas)
parCanvas.appendChild(circlCanvas1)
