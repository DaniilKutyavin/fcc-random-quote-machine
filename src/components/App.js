import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllQuotes, getRandomQuote } from '../modules/quotes'
import { changeBgColor } from '../modules/ui'

function App(props) {
  const { loading, fetchAllQuotes, changeBgColor, quote, getRandomQuote, color } = props
  useEffect(
    () => {
      const url =
        'https://gist.githubusercontent.com/DaniilKutyavin/0d335200fcbbee1fc5337d164e801c1d/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      fetchAllQuotes(url)
      changeBgColor()
    },
    [fetchAllQuotes, changeBgColor]
  )

  const tweetClkHandle = () => {
    const { quote: text, author } = quote
    const tweet = `"${text}" ${author}`
    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, '_blank')
  }
  const { quote: text, author } = quote

  if (loading) return <Loading />

  return (
    <div id="app" className={color}>
      <div id="quote-box">
        <p id="text">
          &ldquo;
          {text}
          &rdquo;
        </p>
        <p id="author">{author}</p>
        <div id="buttons">
          <button id="tweet-quote" onClick={tweetClkHandle}>
            Tweet quote
          </button>
          <button id="new-quote" className={color} onClick={getRandomQuote}>
            New quote
          </button>
        </div>
      </div>
    </div>
  )
}

function Loading() {
  return <h1>Loading...</h1>
}

const mapStateToProps = state => ({
  quote: state.quotes.currentQuote,
  loading: state.quotes.loading,
  color: state.ui.currentColorClass,
})

export default connect(
  mapStateToProps,
  { fetchAllQuotes, getRandomQuote, changeBgColor }
)(App)
