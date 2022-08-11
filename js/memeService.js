'use-strict'
var gLineId

var gKeywordSearchCountMap = {
    'funny': 12, 'cat': 16, 'dog': 0, 'puppy': 0, 'baby': 2,
    'happy': 0, 'crazy': 0, 'sarcastic': 0, 'sad': 0, 'animal': 0,
    'sleep': 0, 'success': 0, 'awkward ': 0, 'lazy': 0, 'weird': 0,
}

var gImgs = [
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
            isText: false,
        },
        {
            lineId: 'line2',
            txt: '',
            size: 40,
            align: 'center',
            color: 'white',
            isText: false,
        }
    ]
}

function getMeme() {
    return gMeme
}

function getImg() {
    return gImgs
}

function getImgUrlById(imgId) {
    const image = gImgs.find(({ id }) => id === imgId);
    return image.url
}

function setLineTxt(text, id) {
    const [topLine, bottomLine] = gMeme.lines
    if(id === topLine.lineId) topLine.txt = text
    else bottomLine.txt = text
    console.log('id',id)
    gLineId = id
    renderCanvas()
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    renderCanvas()
}

function setLineColor(color){
    const [topLine, bottomLine] = gMeme.lines
    topLine.color = color
    bottomLine.color = color
    renderCanvas()
}

function setTextSize(size){
    const [topLine, bottomLine] = gMeme.lines
    topLine.size = size
    bottomLine.size = size
    renderCanvas()
}


function resetCanvas(){
    const [topLine, bottomLine] = gMeme.lines
    topLine.txt = ''
    bottomLine.txt = ''
    topLine.isText = false
    bottomLine.isText = false
    gLineId = undefined
}