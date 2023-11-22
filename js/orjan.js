
//elementer til figuren i SVG
const parOrjan = document.getElementById("orjanFigurSVG")

const faceOrjan = circleSVG(100, "solid", "yellow")
faceOrjan.classList.add("face")

const LeftEyeS = circleSVG(20, "solid", "white")
LeftEyeS.classList.add("left-eye")

const LeftPupil = circleSVG(10, "solid", "black")
LeftPupil.classList.add("left-pupil")

const RightEyeS = circleSVG(20, "solid", "white")
RightEyeS.classList.add("right-eye")

const RightPupil = circleSVG(10, "solid", "black")
RightPupil.classList.add("right-pupil")

const mouthS = rectangleSVG(70, 10, "solid", "black")
mouthS.classList.add("mouth")

parOrjan.appendChild(faceOrjan)
parOrjan.appendChild(LeftEyeS)
parOrjan.appendChild(LeftPupil)
parOrjan.appendChild(RightEyeS)
parOrjan.appendChild(RightPupil)
parOrjan.appendChild(mouthS)


//elementer til figuren i Canvas
const parCanvasO = document.getElementById("orjanFigurCanvas")

if (parCanvasO) {
    const faceCanvas = circle(100, "solid", "yellow")
    faceCanvas.classList.add("face")

    const LeftEyeCanvas = circle(20, "solid", "white")
    LeftEyeCanvas.classList.add("left-eye")

    const LeftPupilCanvas = circle(10, "solid", "black")
    LeftPupilCanvas.classList.add("left-pupil")

    const RightEyeCanvas = circle(20, "solid", "white")
    RightEyeCanvas.classList.add("right-eye")

    const RightPupilCanvas = circle(10, "solid", "black")
    RightPupilCanvas.classList.add("right-pupil")

    const mouthCanvas = rectangle(70, 10, "solid", "black")
    mouthCanvas.classList.add("mouth")

    parCanvasO.appendChild(faceCanvas)
    parCanvasO.appendChild(LeftEyeCanvas)
    parCanvasO.appendChild(LeftPupilCanvas)
    parCanvasO.appendChild(RightEyeCanvas)
    parCanvasO.appendChild(RightPupilCanvas)
    parCanvasO.appendChild(mouthCanvas)
}