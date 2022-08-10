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
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            align: 'left',
            color: 'red'
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
    const image = gImgs.find(({ id }) => id === imgId );
    return image.url
}