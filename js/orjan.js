
//elementer til figuren i SVG
const par = document.getElementById("orjanFigurSVG")

const face = circleSVG(100, "solid", "yellow")
face.classList.add("face")

const LeftEye = circleSVG(20, "solid", "white")
LeftEye.classList.add("left-eye")

const LeftPupil = circleSVG(10, "solid", "black")
LeftPupil.classList.add("left-pupil")

const RightEye = circleSVG(20, "solid", "white")
RightEye.classList.add("right-eye")

const RightPupil = circleSVG(10, "solid", "black")
RightPupil.classList.add("right-pupil")

const mouth = rectangleSVG(70, 10, "solid", "black")
mouth.classList.add("mouth")

par.appendChild(face)
par.appendChild(LeftEye)
par.appendChild(LeftPupil)
par.appendChild(RightEye)
par.appendChild(RightPupil)
par.appendChild(mouth)


//elementer til figuren i Canvas
const parCanvas = document.getElementById("orjanFigurCanvas")

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
mouthCanvas.classList.add("mouthC")

parCanvas.appendChild(faceCanvas)
parCanvas.appendChild(LeftEyeCanvas)
parCanvas.appendChild(LeftPupilCanvas)
parCanvas.appendChild(RightEyeCanvas)
parCanvas.appendChild(RightPupilCanvas)
parCanvas.appendChild(mouthCanvas)
