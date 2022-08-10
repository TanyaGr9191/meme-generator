'use-strict'

var gElCanvas;
var gCtx;


function onInit() {
    gElCanvas = document.querySelector('.meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('ctx', gCtx);

    addRecizeListener()
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
    const meme = getMeme()
    const imgUrl = getImgUrlById(meme.selectedImgId)
    const [topLine] = meme.lines
    const { txt, size, align, color } = topLine
    drawMeme(imgUrl, txt, size, align, color)
}


function resizeCanvas(img) {
    var elContainer = document.querySelector('.meme-container');
    gElCanvas.width = elContainer.offsetWidth - 100;
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2);
}

function onAddInput(ev) {
    ev.preventDefault()

    const elTxt = document.querySelector('[name=memeText]').value
    setLineTxt(elTxt)
    document.querySelector('[name=memeText]').value = ''
}

function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')
}