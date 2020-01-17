const DATA_URL =
  'https://gist.githubusercontent.com/dkutyavin/0d335200fcbbee1fc5337d164e801c1d/raw/df81dcef68efba9389db4906b07ca559a099cbe3/quotes.json'

export async function getQuotes() {
  try {
    const response = await fetch(DATA_URL)
    return await response.json()
  } catch (err) {
    console.error(err)
    throw new Error('Cannot get quotes!')
  }
}
