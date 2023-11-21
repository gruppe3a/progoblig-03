


function circle(radius, mode, color) { //  radius, mode, color

    const canvas = document.createElement("canvas");
    // document.body.appendChild(canvas)

    const ctx = canvas.getContext("2d");

    canvas.width = radius * 2 + 20// adjust for the padding
    canvas.height = radius * 2 + 20 // ^

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    if (mode == "solid") {

        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill()

    }
    else if (mode == "outline") {

        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.strokeStyle = color;
        ctx.stroke()

    };

    return canvas
    
}


function circleSVG(radius, mode, color) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")

    svg.setAttributeNS(null, "width", radius * 2 + 20)
    svg.setAttributeNS(null, "height", radius * 2 + 20)


    const centerX = radius + 10 // adjusted for padding
    const centerY = radius + 10 // adjusted for padding
    
    if (mode == "outline") {
        svg.innerHTML = `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="transparent" stroke="${color}">`
    }
    else {
        svg.innerHTML = `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${color}">`
    }
    // document.body.appendChild(svg)

    return svg
}



function rectangle(width, height, mode, color) {
    // solid or outline


    const canvas = document.createElement("canvas");
    //document.body.appendChild(canvas)

    const ctx = canvas.getContext("2d");

    canvas.width = width + 20 // adjust for the padding
    canvas.height = height + 20 // ^

    if (mode == "solid") {
        ctx.fillStyle = color;
        ctx.fillRect(10, 10, width, height);
    }
    else if (mode == "outline") {
        ctx.strokeStyle = color;
        ctx.strokeRect(10, 10, width, height);
    };

    return canvas
};

function rectangleSVG(width, height, mode, color) { 
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")

    svg.setAttributeNS(null, "width", width)
    svg.setAttributeNS(null, "height", height)
    
    if (mode == "outline") {
        svg.innerHTML = `<rect x="0" y="0" width="${width}" height="${height}" fill="transparent" stroke="${color}">`
    } 
    else {
        svg.innerHTML = `<rect x="0" y="0" width="${width}" height="${height}" fill="${color}">`
    }
    return svg
}