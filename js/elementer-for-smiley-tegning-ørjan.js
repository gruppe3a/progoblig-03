
//elementer til figuren i SVG
const par = document.getElementById("orjanFigurSVG")
const face = circleSVG(100, "solid", "yellow")
const LeftEye = circleSVG(20, "solid", "white")
const LeftPupil = circleSVG(10, "solid", "black")
const RightEye = circleSVG(20, "solid", "white")
const RightPupil = circleSVG(20, "solid", "white")
const mouth = rectangleSVG(70, 10, "solid", "black")

par.appendChild(face)
par.appendChild(LeftEye)
par.appendChild(LeftPupil)
par.appendChild(RightEye)
par.appendChild(RightPupil)
par.appendChild(mouth)


//elementer til figuren i Canvas
const parCanvas = document.getElementById("orjanFigurCanvas")
const faceCanvas = circle(100, "solid", "yellow")
const LeftEyeCanvas = circle(20, "solid", "white")
const LeftPupilCanvas = circle(10, "solid", "black")
const RightEyeCanvas = circle(20, "solid", "white")
const RightPupilCanvas = circle(20, "solid", "white")
const mouthCanvas = rectangle(70, 10, "solid", "black")

parCanvas.appendChild(faceCanvas)
parCanvas.appendChild(LeftEyeCanvas)
parCanvas.appendChild(LeftPupilCanvas)
parCanvas.appendChild(RightEyeCanvas)
parCanvas.appendChild(RightPupilCanvas)
parCanvas.appendChild(mouthCanvas)
