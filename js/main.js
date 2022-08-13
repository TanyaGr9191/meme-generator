'use-strict'

var gElCanvas
var gCtx
var gUploadedImg


function onInit() {
    gElCanvas = document.querySelector('.meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('ctx', gCtx);

    addRecizeListener()
    renderGallery()
    // renderMemeGallery()
    renderCanvas()
}

function addRecizeListener() {
    window.addEventListener('resize', (ev) => {
        ev.preventDefault()
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
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2);
}

function onAddInput(ev) {
    ev.preventDefault()
    submitForms()
}

function submitForms() {
    const elTxt1 = document.querySelector('[name=memeText1]').value
    const elTxt2 = document.querySelector('[name=memeText2]').value

    addInput(elTxt1, elTxt2)

    document.querySelector('[name=memeText1]').value = ''
    document.querySelector('[name=memeText2]').value = ''
    renderCanvas()
}

function onSetColor(elColor) {
    setLineColor(elColor)
    renderCanvas()
}

function onTextStroke(elStrokeColor) {
    setStrokeColor(elStrokeColor)
    renderCanvas()
}

function onIncreaseFont() {
    increaseFont()
    renderCanvas()
}

function onDecreaseFont() {
    decreaseFont()
    renderCanvas()
}

function onSwitchLines() {
    switchLines()
    renderCanvas()
}

function onRemoveText() {
    removeText()
    renderCanvas()
}

function onAlignRight() {
    alignRight()
    renderCanvas()
}

function onAlignCenter() {
    alignCenter()
    renderCanvas()
}

function onAlignLeft() {
    alignLeft()
    renderCanvas()
}

function onDownloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    downloadCanvas(elLink, data)

}

function onSetFlexible() {
    setImg(getRandomIntInclusive(1, 18))
    setInput()
    setTextFontSize()
    setLineColor(getRandomColor())
    setStrokeColor(getRandomColor())
    renderCanvas()
}

function onSaveMeme(elLink) {
    const data = gElCanvas.toDataURL();
    let name = prompt('Meme name?')
    if (name) {
        saveMeme(name, elLink, data)
    }
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg")

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

        document.querySelector('.share-container').innerHTML = `
        <a class="link" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
        Share   
        </a>`
    }

    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch(err => {
            console.error(err)
        })
}

function drawLoadedImg(img) {
    if (gElCanvas.width / gElCanvas.height !== img.width / img.height) {
        gElCanvas.height = (img.height * gElCanvas.width / img.width)
    }
    if (img){
        gUploadedImg = img
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    }
}

function onImgInput(ev) {
    loadImageFromInput(ev, drawLoadedImg)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.nav-list').innerHTML = ''

    var reader = new FileReader()

    reader.onload = (event) => {
        var img = new Image()
        var gUploadedImg = new Image()
        img.src = event.target.result
        gUploadedImg.src = event.target.result
        img.onload = onImageReady.bind(null, img)
        gUploadedImg.onload = onImageReady.bind(null, img)
    }

    reader.readAsDataURL(ev.target.files[0])

}

