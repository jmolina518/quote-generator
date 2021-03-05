let apiQuotes = []

// Get Quotes From API

async function getQuote() {
  const apiUrl = 'http://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    console.log(apiQuotes)
  } catch (error) {
    console.log('whoops, no quote', error)
  }
}

// On Load

getQuote()
