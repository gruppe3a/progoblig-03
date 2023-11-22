/*const parC = document.getElementById("noahFigureC") 
const bgC = rectangle(160, 160, "solid", "darkred")
const outer_circC = circle(60, "outline", "yellow")
outer_circC.classList.add("outer-circ")
const inner_circC = circle(59, "solid", "black")
inner_circC.classList.add("inner-circ")

parC.appendChild(bgC)
parC.appendChild(outer_circC)
parC.appendChild(inner_circC)

const pair = document.getElementById("noahFigureSVG")
const bg = rectangleSVG(160, 160, "solid", "darkred")
const outer_circ = circleSVG(60, "outline", "yellow")
outer_circ.classList.add("outer-circ")
const inner_circ = circleSVG(59, "solid", "black")
inner_circ.classList.add("inner-circ")

pair.appendChild(bg)
pair.appendChild(outer_circ)
pair.appendChild(inner_circ)
*/
const pairSVG = document.getElementById("noahFigureSVG") 
const bgSVG = rectangleSVG(160, 160, "solid", "darkred")
bgSVG.classList.add("bg")

const outercircleSVG = circleSVG(60,  "outline", "yellow")
outercircleSVG.classList.add("outercircle")

const innercircleSVG = circleSVG(59, "solid", "black")
innercircleSVG.classList.add("innercircle")

pairSVG.appendChild(bgSVG)
pairSVG.appendChild(outercircleSVG)
pairSVG.appendChild(innercircleSVG)





const pairCanvas = document.getElementById("noahFigureC") 
const bg = rectangle(160, 160, "solid", "darkred")
bg.classList.add("bgC")

const outercircle = circle(60,  "outline", "yellow")
outercircle.classList.add("outercircleC")

const innercircle = circle(59, "solid", "black")
innercircle.classList.add("innercircleC")

pairCanvas.appendChild(bg)
pairCanvas.appendChild(outercircle)
pairCanvas.appendChild(innercircle)
