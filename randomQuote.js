genQuote = () => {
    // arrays for the two parts of the quote
    let firstQuotePart = [
        "Don't forget,",
        "Remember,"
    ];

    let secondQuotePart = [
        'you are good enough.',
        'you are amazing.',
        'the world needs you to be you.',
        'who you are.',
        'why you started.'
    ];
    
    // generates two random numbers (related to the size of the quote arrays) to choose the part of the quote
    const ranQuotePartOne = Math.floor(Math.random() * firstQuotePart.length);
    const ranQuotePartTwo = Math.floor(Math.random() * secondQuotePart.length);

    // combine the two strings and return the final quote
    const finalQuote = firstQuotePart[ranQuotePartOne] + ' ' + secondQuotePart[ranQuotePartTwo];
    return finalQuote;
}

console.log(genQuote());