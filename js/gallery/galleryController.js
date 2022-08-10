'use-strict'

function renderGallery() {
    const images = getImg()
    const strHtmls = images.map(image => `
    <article class="image-preview">
    <img src="${image.url}" alt="" onclick="onImgSelect(${image.id})">
    </article> 
    `
    ).join('')

    document.querySelector('.images-container').innerHTML = strHtmls
}

function onImgSelect(imgId){
    console.log('imgId',imgId)
    const image = getImgUrlById(imgId)
    console.log('image',image)
    setImg(imgId)
    const elModal = document.querySelector('.modal')
    elModal.classList.add('open')
}

function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')
}

