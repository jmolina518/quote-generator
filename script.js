const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = []

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  //  Check if Author fiels is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = 'Unknown'
  } else {
    authorText.textContent = quote.author
  }

  quoteText.textContent = quote.text
}

// Get Quotes From API

async function getQuote() {
  const apiUrl = 'http://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    newQuote()
  } catch (error) {
    console.log('whoops, no quote', error)
  }
}

// On Load

getQuote()
