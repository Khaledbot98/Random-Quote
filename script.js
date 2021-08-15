// All Quotes

const quotes = [
  {
    quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
    author: `• Kent Beck`,
  },
  {
    quote: `Talk is cheap. Show me the code.`,
    author: `• Linus Torvalds`,
  },
  {
    quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
    author: `• Harold Abelson`,
  },
  {
    quote: `Truth can only be found in one place: the code.`,
    author: `• Robert C`,
  },
  {
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    author: `• Muhammad Waseem`,
  },
  {
    quote: `How you look at it is pretty much how you'll see it`,
    author: `• Steve Jobs`,
  },
  {
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    author: `• Alan Kay`,
  },
  {
    quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
    author: `• C.A.R. Hoare`,
  },
  {
    quote: `i am committed to push my branch to the master.`,
    author: `• Halgurd Hussein`,
  },
  {
    quote: `Coding is not just code, that is a live thing to serve everyone!`,
    author: `• Ming Song`,
  },

  {
    quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best`,
    author: `• Marilyn Monroe`,
  },

  {
    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    author: `• Albert Einstein`,
  },

  {
    quote: `So many books, so little time.`,
    author: `• Frank Zappa`,
  },

  {
    quote: `A room without books is like a body without a soul.`,
    author: `• Marcus Tullius Cicero`,
  },

  {
    quote: `Be the change that you wish to see in the world.`,
    author: `• Mahatma Gandhi`,
  },
];

var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

window.ready;

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].author;
});
