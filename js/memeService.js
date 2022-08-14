'use-strict'

var gLineId

var gCurrMeme = {
    name: '',
    memeImg: null,
    url: '',
    link: null
}

var gMemes = []

var gKeywordSearchCountMap = {
    'funny': 12, 'cat': 16, 'dog': 0, 'puppy': 0, 'baby': 2,
    'happy': 0, 'crazy': 0, 'sarcastic': 0, 'sad': 0, 'animal': 0,
    'sleep': 0, 'success': 0, 'awkward ': 0, 'lazy': 0, 'weird': 0,
}

const gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['dog', 'happy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['baby', 'dog'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat', 'sleep'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby', 'success'] },
    { id: 6, url: 'img/6.jpg', keywords: ['baby', 'success'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby', 'success'] },
    { id: 8, url: 'img/8.jpg', keywords: ['baby', 'success'] },
    { id: 9, url: 'img/9.jpg', keywords: ['baby', 'success'] },
    { id: 10, url: 'img/10.jpg', keywords: ['baby', 'success'] },
    { id: 11, url: 'img/11.jpg', keywords: ['baby', 'success'] },
    { id: 12, url: 'img/12.jpg', keywords: ['baby', 'success'] },
    { id: 13, url: 'img/13.jpg', keywords: ['baby', 'success'] },
    { id: 14, url: 'img/14.jpg', keywords: ['baby', 'success'] },
    { id: 15, url: 'img/15.jpg', keywords: ['baby', 'success'] },
    { id: 16, url: 'img/16.jpg', keywords: ['baby', 'success'] },
    { id: 17, url: 'img/17.jpg', keywords: ['baby', 'success'] },
    { id: 18, url: 'img/18.jpg', keywords: ['baby', 'success'] },
    { id: 19, url: 'img/19.jpg', keywords: ['baby', 'success'] },
    { id: 20, url: 'img/20.jpg', keywords: ['baby', 'success'] },
    { id: 21, url: 'img/21.jpg', keywords: ['baby', 'success'] },
    { id: 22, url: 'img/22.jpg', keywords: ['baby', 'success'] },
    { id: 23, url: 'img/23.jpg', keywords: ['baby', 'success'] },
    { id: 24, url: 'img/24.jpg', keywords: ['baby', 'success'] },
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            lineId: 'line1',
            txt: '',
            size: 40,
            align: 'center',
            color: 'white',
            stroke: 'black',
            isText: false,
            linePos: { coordX: 1, coordY: 1 }
        },
        {
            lineId: 'line2',
            txt: '',
            size: 40,
            align: 'center',
            color: 'white',
            stroke: 'black',
            isText: false,
            linePos: { coordX: 1, coordY: 1 }
        }
    ]
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function getImgUrlById(imgId) {
    const image = gImgs.find(({ id }) => id === imgId);
    return image.url
}


function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setStrokeColor(color) {
    const [topLine, bottomLine] = gMeme.lines
    topLine.stroke = color
    bottomLine.stroke = color
}

function setLineColor(color) {
    const [topLine, bottomLine] = gMeme.lines
    topLine.color = color
    bottomLine.color = color
}

function increaseFont() {
    const [topLine, bottomLine] = gMeme.lines
    topLine.size++
    bottomLine.size++
}

function decreaseFont() {
    const [topLine, bottomLine] = gMeme.lines
    topLine.size--
    bottomLine.size--
}

function switchLines() {
    let tempLine = gMeme.lines[0]
    gMeme.lines[0] = gMeme.lines[1]
    gMeme.lines[1] = tempLine
}

function removeText() {
    resetCanvas()
}

function resetCanvas() {
    const [topLine, bottomLine] = gMeme.lines
    topLine.txt = ''
    bottomLine.txt = ''
    topLine.size = 40
    bottomLine.size = 40
    topLine.color = 'white'
    bottomLine.color = 'white'
    topLine.stroke = 'black'
    bottomLine.stroke = 'black'
    topLine.isText = false
    bottomLine.isText = false
    gLineId = undefined
    gUploadedImg = undefined
}

function addInput(text1, text2) {
    const [topLine, bottomLine] = gMeme.lines

    if (text1 !== '' && text2 !== '') {
        setLineTxt(text1, topLine.lineId)
        setLineTxt(text2, bottomLine.lineId)
    } else if (text1 !== '') {
        setLineTxt(text1, topLine.lineId)
    } else if (text2 !== '') {
        setLineTxt(text2, bottomLine.lineId)
    }
}

function setLineTxt(text, id) {
    const [topLine, bottomLine] = gMeme.lines
    if (id === topLine.lineId) topLine.txt = text
    else bottomLine.txt = text
    gLineId = id
}

function alignLeft() {
    const [topLine, bottomLine] = gMeme.lines
    let { coordX, coordY } = topLine.linePos
    coordX = 3;
    topLine.linePos = { coordX, coordY }
    bottomLine.linePos = { coordX, coordY }
}

function alignCenter() {
    const [topLine, bottomLine] = gMeme.lines
    let { coordX, coordY } = topLine.linePos
    coordX = 1;
    topLine.linePos = { coordX, coordY }
    bottomLine.linePos = { coordX, coordY }
}

function alignRight() {
    const [topLine, bottomLine] = gMeme.lines
    let { coordX, coordY } = topLine.linePos
    coordX = 0.6;
    topLine.linePos = { coordX, coordY }
    bottomLine.linePos = { coordX, coordY }
}

function setInput() {
    resetCanvas()

    let text1 = ''
    let text2 = ''

    const numOfLines = getRandomIntInclusive(1, 2)

    if (numOfLines === 1) {
        text1 = makeStr()
    }
    else {
        text1 = makeStr()
        text2 = makeStr()
    }

    addInput(text1, text2)
}

function setTextFontSize() {
    let size = getRandomIntInclusive(15, 65)
    const [topLine, bottomLine] = gMeme.lines
    topLine.size = size
    bottomLine.size = size
}

function saveMeme(name, link, data) {
    link.data = data
    link.name = name + '.jpg'
    gCurrMeme.url = gMeme.selectedImgId + '.jpg'
    gCurrMeme.name = name
    gCurrMeme.memeImg = gMeme
    gCurrMeme.link = link
    gMemes.push(gCurrMeme)
    const savesMemes = loadFromStorage('meme')

    saveToStorage('meme', [gCurrMeme,...gMemes])
}

function downloadCanvas(link, data) {
    link.href = data;
    link.download = 'my-canvas';
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
