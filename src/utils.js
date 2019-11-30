const DATA_URL =
  'https://gist.githubusercontent.com/DaniilKutyavin/0d335200fcbbee1fc5337d164e801c1d/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

export async function getQuotes() {
  try {
    const response = await fetch(DATA_URL)
    const quotes = await response.json()
    return quotes
  } catch (err) {
    console.error(err)
    throw new Error('Cannot get quotes!')
  }
}
