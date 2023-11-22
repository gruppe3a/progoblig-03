



const parSVGT = document.getElementById("terjeFigurSVG")
const background =  rectangleSVG(300, 200, "outline", "black") //rectangleSVG(300, 200, "outline", "black")
const circleSV = circleSVG(50, "solid", "red")


circleSV.classList.add("japan-circle-svg")

parSVGT.appendChild(background)
parSVGT.appendChild(circleSV)


const parCanvasT = document.getElementById("terjeFigurCanvas") 
if (parCanvasT) {
    const circlCanvas = rectangle(300, 200, "outline", "black")
    const circlCanvas1 = circle(50, "solid", "red")
    circlCanvas1.classList.add("japan-circle")

    parCanvasT.appendChild(circlCanvas)
    parCanvasT.appendChild(circlCanvas1)
}