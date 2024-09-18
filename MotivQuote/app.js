const quote = document.getElementsByClassName("container")[0];
const author = document.getElementsByClassName("author")[0];

const newQuoteBtn = document.querySelector(".quote_btn");
const tweetBtn = document.querySelector(".tweet_btn");

const apiLink = "https://quotes-api-self.vercel.app/quote";

let temp;

const getData = async () => {
  const response = await fetch(apiLink);
  const data = await response.json();
  // console.log(data);
  console.log(data.quote);
  console.log(data.author);

  quote.innerHTML = data.quote;
  author.innerHTML = data.author;

  temp = data.quote;
};

getData();

newQuoteBtn.addEventListener("click", () => {
  getData();
});

tweetBtn.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" + temp,
    "tweet post",
    "width=600px, height=350px"
  );
});
