

const par = document.getElementById("ayubFigurSVG")
const circl = circleSVG(20, "solid", "green")
const circl1 = circleSVG(20, "solid", "green")
const circl2 = circleSVG(20, "solid", "green")

par.appendChild(circl)
par.appendChild(circl1)
par.appendChild(circl2)


const parCanvas = document.getElementById("ayubFigurCanvas") 
const circlCanvas = circle(20, "solid", "green")
const circlCanvas1 = circle(20, "solid", "green")
const circlCanvas2 = circle(20, "solid", "green")

parCanvas.appendChild(circlCanvas)
parCanvas.appendChild(circlCanvas1)
parCanvas.appendChild(circlCanvas2)