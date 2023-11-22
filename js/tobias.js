    const par = document.getElementById("tobiasFigurSVG")
const face = circleSVG(160, "solid", "grey")
const LeftEye = circleSVG(30, "solid", "red")
const RightEye = circleSVG(30, "solid", "red")
const mouth = triangleSVG(80, "solid", "black")

par.appendChild(face)
par.appendChild(LeftEye)
par.appendChild(RightEye)
par.appendChild(mouth)



    const parCanvas = document.getElementById("tobiasFigurCanvas")
const faceCanvas = circle(160, "solid", "grey")
const LeftEyeCanvas = circle(30, "solid", "red")
const RightEyeCanvas = circle(30, "solid", "red")
const mouthCanvas = triangle(80, "solid", "black")

parCanvas.appendChild(faceCanvas)
parCanvas.appendChild(LeftEyeCanvas)
parCanvas.appendChild(RightEyeCanvas)
parCanvas.appendChild(mouthCanvas)
