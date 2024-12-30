const quote = document.getElementById("container");
const author = document.getElementById("author");

const newQuoteBtn = document.querySelector(".quoteBtn");
const tweetBtn = document.querySelector(".tweetBtn");

const apiLink = "https://quotes-api-self.vercel.app/quote";

let temp;

const getData = async () => {
  try {
    const resp = await fetch(apiLink);
    const data = await resp.json();
    // console.log(data);
    // console.log(data.quote);
    // console.log(data.author);  
    quote.innerHTML = `&ldquo;${data.quote}&rdquo;`;
    author.innerHTML = data.author;
    temp = data.quote;
  }
  catch(err) {
    console.log(err) 
  }
};

getData();

newQuoteBtn.addEventListener("click", () => {
  getData();
});

tweetBtn.addEventListener("click", () => {
  window.open(
    `https://twitter.com/intent/tweet?text=${temp}`, 
    'tweetPost', 
    'width=600,height=350'
  );
  
});
