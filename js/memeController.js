'use-strict'

function drawMeme() {
    const meme = getMeme()
    const imgUrl = gUploadedImg ? gUploadedImg.src : getImgUrlById(meme.selectedImgId)
    const [topLine, bottomLine] = meme.lines


    gCtx.beginPath()
    let img = gUploadedImg ? gUploadedImg : new Image()
    img.src = imgUrl


    img.onload = () => {
        if (gElCanvas.width / gElCanvas.height !== img.width / img.height) {
            gElCanvas.height = (img.height * gElCanvas.width / img.width)
        }
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        const pos = { x: gElCanvas.width / 2, y: gElCanvas.height / 8 }
        // Line 1
        const { coordX, coordY } = topLine.linePos
        const xAxis = coordX
        const yAxis = coordY
        gCtx.font = topLine.size + 'px Impact'
        gCtx.textBaseline = 'middle'
        gCtx.textAlign = topLine.align
        gCtx.lineWidth = 2
        gCtx.fillStyle = topLine.color
        gCtx.fillText(topLine.txt, pos.x / xAxis, pos.y / yAxis)
        gCtx.strokeStyle = topLine.stroke
        gCtx.strokeText(topLine.txt, pos.x / xAxis, pos.y / yAxis)

        // Line 2
        if (bottomLine.lineId === gLineId || topLine.isText) {
            const { coordX, coordY } = bottomLine.linePos
            const xAxis = coordX
            const yAxis = coordY
            gCtx.font = bottomLine.size + 'px Impact'
            gCtx.textBaseline = 'middle'
            gCtx.textAlign = bottomLine.align
            gCtx.lineWidth = 2
            gCtx.fillStyle = bottomLine.color
            gCtx.fillText(bottomLine.txt, pos.x / xAxis, pos.y * 7 / yAxis)
            gCtx.strokeStyle = bottomLine.stroke
            gCtx.strokeText(bottomLine.txt, pos.x / xAxis, pos.y * 7 / yAxis)
            bottomLine.isText = true
            topLine.isText = true
        }
    }

    gCtx.closePath()
}

