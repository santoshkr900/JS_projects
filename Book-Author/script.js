var mainDiv = document.getElementById('main')

var bookUrl = document.getElementById('url')
var bookName = document.getElementById('name')
var authorName = document.getElementById('aname')

var getBook = function() {
    if (!bookUrl.value.trim() || !bookName.value.trim() || !authorName.value.trim()) {
        alert("Please fill all the input details first..!");
        return;
    }
   var card = document.createElement('div')
   var bDiv = document.createElement('div')
   var bImg = document.createElement('img')
   bImg.src = bookUrl.value
   bImg.alt = bookName.value
   var bName = document.createElement('h3')
   bName.textContent = bookName.value
   var bAuthor = document.createElement('h4')
   bAuthor.textContent = `Author : ${authorName.value}`
   bDiv.append(bImg,bName,bAuthor)
   card.appendChild(bDiv)
   card.setAttribute('class','card')
   mainDiv.appendChild(card)
}
