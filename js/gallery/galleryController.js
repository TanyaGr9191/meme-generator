'use-strict'
function init() {
    renderGallery()
}

function renderGallery() {
    const images = getImg()
    const strHtmls = images.map(image => `
    <article class="image-preview">
    <img src="${image.url}" alt="" onclick="onImgSelect(${image.id})">
    `
    ).join('')

    document.querySelector('.images-container').innerHTML = strHtmls
}

function onImgSelect(imgId){
    console.log('elImg',imgId)
    setImg(imgId)
}