function drawMeme(imgUrl, txt, size, align, color) {
    gCtx.beginPath();
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
        if (gElCanvas.width / gElCanvas.height !== img.width / img.height) {
            gElCanvas.height = (img.height * gElCanvas.width / img.width)
        }
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.font = size + 'px Impact';
        const pos = { x: gElCanvas.width / 8, y: gElCanvas.height / 8 }
        gCtx.textBaseline = 'middle';
        gCtx.textAlign = align;
        gCtx.lineWidth = 2;
        gCtx.fillStyle = color;
        gCtx.fillText(txt, pos.x, pos.y)
        gCtx.strokeStyle = 'black';
        gCtx.strokeText(txt, pos.x, pos.y);
    };
    gCtx.closePath()
}

