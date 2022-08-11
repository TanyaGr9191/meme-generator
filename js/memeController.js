'use-strict'

function drawMeme() {
    const meme = getMeme()
    const imgUrl = getImgUrlById(meme.selectedImgId)
    const [topLine, bottomLine] = meme.lines

    console.log('gLineId', gLineId)
    console.log('topLine', topLine)
    console.log('bottomLine', bottomLine)
    gCtx.beginPath()
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
        if (gElCanvas.width / gElCanvas.height !== img.width / img.height) {
            gElCanvas.height = (img.height * gElCanvas.width / img.width)
        }
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        const pos = { x: gElCanvas.width / 2, y: gElCanvas.height / 8 }
        // Line 1
        gCtx.font = +topLine.size + 'px Impact'
        gCtx.textBaseline = 'middle'
        gCtx.textAlign = topLine.align
        gCtx.lineWidth = 2
        gCtx.fillStyle = topLine.color
        gCtx.fillText(topLine.txt, pos.x, pos.y)
        gCtx.strokeStyle = 'black'
        gCtx.strokeText(topLine.txt, pos.x, pos.y)

        // Line 2
        if (bottomLine.lineId === gLineId || topLine.isText) {
            gCtx.font = bottomLine.size + 'px Impact'
            gCtx.textBaseline = 'middle'
            gCtx.textAlign = bottomLine.align
            gCtx.lineWidth = 2
            gCtx.fillStyle = bottomLine.color
            gCtx.fillText(bottomLine.txt, pos.x, pos.y * 7)
            gCtx.strokeStyle = 'black'
            gCtx.strokeText(bottomLine.txt, pos.x, pos.y * 7)
            bottomLine.isText = true
            topLine.isText = true
        }
    }

    gCtx.closePath()
}

