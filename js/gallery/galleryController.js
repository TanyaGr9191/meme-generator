'use-strict'

function renderGallery() {
    const images = getImg()
    const strHtmls = images.map(image => `
    <article class="gallery-item">
    <img class="gallery-image" src="${image.url}" alt="" onclick="onImgSelect(event,${image.id})">
    </article> 
    `
    ).join('')
    
    document.querySelector('.gallery-container ').innerHTML = strHtmls
}

function onImgSelect(ev,imgId){
    resetCanvas()
    setImg(imgId)
    toggleModal()
    renderCanvas()
}

function toggleModal(){
    document.querySelector('.modal-body').classList.toggle('open')
}

function toggleMemeGallery(){
    document.querySelector('.modal-gallery').classList.toggle('open-gallery')
}

function oncloseModal(){
    document.querySelector('.modal-body').classList.remove('open')
    document.querySelector('.modal-gallery').classList.remove('open-gallery')
}
