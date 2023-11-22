const parTobi = document.getElementById("tobiasFigurSVG")
const face = circleSVG(160, "solid", "#ccc")
const LeftEye = circleSVG(30, "solid", "red")
LeftEye.classList.add("left-eye-tobias")
const RightEye = circleSVG(30, "solid", "red")
RightEye.classList.add("right-eye-tobias")
const mouth = rectangleSVG(70, 10, "solid", "black")
mouth.classList.add("mouth-tobias")

parTobi.appendChild(face)
parTobi.appendChild(LeftEye)
parTobi.appendChild(RightEye)
parTobi.appendChild(mouth)



const parCanvasTobi = document.getElementById("tobiasFigurCanvas")
if(parCanvasTobi) {
    const faceCanvas = circle(160, "solid", "#ccc")
    const LeftEyeCanvas = circle(30, "solid", "red")
    LeftEyeCanvas.classList.add("left-eye-tobias")
    const RightEyeCanvas = circle(30, "solid", "red")
    RightEyeCanvas.classList.add("right-eye-tobias")
    const mouthCanvas = rectangle(70, 10, "solid", "black")
    mouthCanvas.classList.add("mouth-tobias")

    parCanvasTobi.appendChild(faceCanvas)
    parCanvasTobi.appendChild(LeftEyeCanvas)
    parCanvasTobi.appendChild(RightEyeCanvas)
    parCanvasTobi.appendChild(mouthCanvas)
}
