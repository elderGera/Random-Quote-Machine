const QUOTELIST = [
    {
      quote: "Knowledge is power.",
      author: "Sir Francis Bacon"
    },
    {
      quote:
        "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.",
      author: "Alexander Graham Bell"
    },
    {
      quote:
        "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
      author: "Winston Churchill"
    },
    {
      quote:
        "Choose a job you love, and you will never have to work a day in your life.",
      author: "Confucius"
    },
    {
      quote: "Nothing in life is to be feared; it is only to be understood.",
      author: "Marie Curie"
    }
  ];
  
window.onload = init;
function init() {
  generateQuote();
}
  
function generateQuote() {
  let quoteSize = QUOTELIST.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTELIST[randomIndex];

  let twitterLink =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22";
  let qInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
  twitterLink += qInApiFormat + '" - ';
  let aInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
  twitterLink += aInApiFormat;

  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
}  