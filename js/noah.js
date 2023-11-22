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
if (pairCanvas) {
    const bg = rectangle(160, 160, "solid", "darkred")
    bg.classList.add("bgC")

    const outercircle = circle(60,  "outline", "yellow")
    outercircle.classList.add("outercircleC")

    const innercircle = circle(59, "solid", "black")
    innercircle.classList.add("innercircleC")

    pairCanvas.appendChild(bg)
    pairCanvas.appendChild(outercircle)
    pairCanvas.appendChild(innercircle)
}
