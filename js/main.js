var imgQuote = document.getElementById("img-quote");
var quoteOutput = document.getElementById("quote-output");
var authorOutput = document.getElementById("author-output");
var quoteParent = document.getElementById("quote-parent");
function generateQuotes() {
    var randomChooser = Math.round(Math.random() * 10);
    if (randomChooser <= 0) {
        quoteOutput.innerHTML = `“Be yourself; everyone else is already taken.”`;
        authorOutput.innerHTML = `oscar wild`;
        imgQuote.src = `oscarwild.jpg`;

    } else if (randomChooser <= 1) {
        quoteOutput.innerHTML = `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`;
        authorOutput.innerHTML = `Albert Einstein`;
        imgQuote.src = `alperteinstein.jpg`;


    } else if (randomChooser <= 2) {
        quoteOutput.innerHTML = `“So many books, so little time.”`;
        authorOutput.innerHTML = `Frank Zappa`;
        imgQuote.src = `frank zappa.jpg`;

    } else if (randomChooser <= 3) {
        quoteOutput.innerHTML = `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`;
        authorOutput.innerHTML = `Dr. Seuss`;
        imgQuote.src = `drseuss.jpg`;

    } else if (randomChooser <= 4) {
        quoteOutput.innerHTML = `“Be the change that you wish to see in the world.”`;
        authorOutput.innerHTML = `Mahatma Gandhi`;
        imgQuote.src = `ghandy.jpg`;

    } else if (randomChooser <= 5) {
        quoteOutput.innerHTML = `“In three words I can sum up everything I've learned about life: it goes on.”`;
        authorOutput.innerHTML = `Robert Frost`;
        imgQuote.src = `ropert-frost.jpg`;

    } else if (randomChooser <= 6) {
        quoteOutput.innerHTML = `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`;
        authorOutput.innerHTML = `J.K. Rowling`;
        imgQuote.src = `jk.jpg`;

    } else if (randomChooser <= 7) {
        quoteOutput.innerHTML = `
        “Only once in your life, I truly believe, you find someone who can completely turn your world around”`;
        authorOutput.innerHTML = `Bob Marley🚬
        ElBOB Malek ElJOP🚬`;
        imgQuote.src = `bob.jpg`;

    } else if (randomChooser <= 8) {
        quoteOutput.innerHTML = `“in my mind always i'm the best player in the wolrd”`;
        authorOutput.innerHTML = `mohamed salah`;
        imgQuote.src = `mo-salah.jpeg`

    } else if (randomChooser <= 9) {
        quoteOutput.innerHTML = `“just start don't wait till your office be clean, throw yourself”`;
        authorOutput.innerHTML = `ahmed el-ghandor "el-da7e7"`;
        imgQuote.src = `da7e7.jpeg`;

    } else if (randomChooser <= 10) {
        quoteOutput.innerHTML = `“how much did you sell me 3ashry”`;
        authorOutput.innerHTML = `ebrahim el-abyiad`;
        imgQuote.src = `ebrahim.jpg`;

    }
    console.log(randomChooser)
}

