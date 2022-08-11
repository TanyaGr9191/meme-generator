'use-strict'

var gElCanvas
var gCtx


function onInit() {
    gElCanvas = document.querySelector('.meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('ctx', gCtx);

    addRecizeListener()
    renderGallery()
    // resizeCanvas()
    renderCanvas()
}

function addRecizeListener() {
    window.addEventListener('resize', (ev) => {
        ev.preventDefault()
        // resizeCanvas()
        renderCanvas()
    })
}

function renderCanvas() {
    renderMeme()
}

function renderMeme() {

    drawMeme()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.meme-container')
    gElCanvas.width = elContainer.offsetWidth - 100
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2);
}

function onAddInput(ev) {
    ev.preventDefault()

    let elTxt = ''
    let elLineId = ''
    const [topLine, bottomLine] = gMeme.lines

    const elTxt1 = document.querySelector('[name=memeText1]').value
    const elTxt2 = document.querySelector('[name=memeText2]').value

    if (ev.target.id === 'input1') {
        elTxt = elTxt1
        elLineId = topLine.lineId
        document.querySelector('[name=memeText1]').value = ''
    } else {
        elTxt = elTxt2
        elLineId = bottomLine.lineId
        document.querySelector('[name=memeText2]').value = ''
    }

    setLineTxt(elTxt, elLineId)
}

function onSetColor(ev){
    const elColor = document.querySelector('[name=textColor]').value
    setLineColor(elColor)
}

function onSetSize(ev){
    const elSize = document.querySelector('[name=textSize]').value
    setTextSize(+elSize)
}