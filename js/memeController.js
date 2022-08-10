function drawImg() {
    const img = new Image();
    img.src = 'img/dog.jpg';

    img.onload = () => {
        if(gElCanvas.width/gElCanvas.height !== img.width/img.height){
            gElCanvas.height = (img.height*gElCanvas.width/img.width)
            // renderCanvas()
        }
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    };
}

function draw(ev) {
    // const offsetX = ev.offsetX;
    // const offsetY = ev.offsetY;
    const { offsetX, offsetY } = ev

    drawText('TEXT', offsetX, offsetY);

}

function drawText(txt, x, y) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 3;
    gCtx.font = '40px Impact';
    gCtx.fillStyle = 'white';
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'black';
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}
