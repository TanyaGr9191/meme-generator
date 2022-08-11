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
    setImg(imgId)
    toggleModal()
}

function toggleModal(){
    document.querySelector('.modal-body').classList.toggle('open')
    resetCanvas()
}

