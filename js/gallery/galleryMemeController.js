'use-strict'

function onImgSelect(ev, imgId) {
    console.log('imgId', imgId)
    resetCanvas()
    setImg(imgId)
    toggleModal()
    renderCanvas()
}

function toggleModal() {
    document.querySelector('.modal-body').classList.toggle('open')
}

function toggleMemeGallery() {
    document.querySelector('.modal-gallery').classList.toggle('open-gallery')
}

function oncloseModal() {
    document.querySelector('.modal-body').classList.remove('open')
    document.querySelector('.modal-gallery').classList.remove('open-gallery')
}
