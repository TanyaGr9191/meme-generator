var gKeywordSearchCountMap = {
    'funny': 12, 'cat': 16, 'dog': 0, 'puppy': 0, 'baby': 2,
    'happy': 0, 'crazy': 0, 'sarcastic': 0, 'sad': 0, 'animal': 0,
    'sleep': 0, 'success': 0, 'awkward ': 0, 'lazy': 0, 'weird': 0,
}

var gImgs = [
    { id: 1, url: '../DESIGN/meme-imgs(square)/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: '../DESIGN//meme-imgs(square)/2.jpg', keywords: ['dog', 'happy'] },
    { id: 3, url: '../DESIGN//meme-imgs(square)/3.jpg', keywords: ['baby', 'dog'] },
    { id: 4, url: '../DESIGN//meme-imgs(square)/4.jpg', keywords: ['cat', 'sleep'] },
    { id: 5, url: '../DESIGN//meme-imgs(square)/5.jpg', keywords: ['baby', 'success'] },
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