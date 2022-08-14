function makeId(length = 5) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function makeStr(length = 15) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

//At 2018-09-24 Time: 10:23
function createdAt(time) {
    var newDate = new Date(time)
    var year = newDate.getFullYear()
    var month = newDate.getMonth() + 1
    var date = newDate.getDate() 
    var hours = newDate.getHours()
    hours = hours % 12
    hours = hours ? hours : 12
    var minutes = newDate.getMinutes()
    var seconds = newDate.getSeconds()

    var ampm = hours >= 12 ? 'AM' : 'PM'

    var monthToDisplay = (month + '').padStart(2, '0')
    var dateToDisplay = (date + '').padStart(2, '0')
    var hoursToDisplay = (hours + '').padStart(2, '0')
    var minutesToDisplay = (minutes + '').padStart(2, '0')
    var secondsToDisplay = (seconds + '').padStart(2, '0')

    return `${monthToDisplay}/${dateToDisplay}/${year} Time: ${hoursToDisplay}:${minutesToDisplay}:${secondsToDisplay} ${ampm}`
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}


function makeLorem(wordCount = 15) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num)
}

function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num)
}

function formatDate(time) {
    var options = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    }

    return new Intl.DateTimeFormat(gCurrLang.options).format(time)
}

function kmToMiles(km) {
    return km/1.609
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// show slides function
var slideIndex = [1,1];
var slideId = ['sticker']

function chooseStickers(){
    showSlides(1, 0)
}

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block"
}