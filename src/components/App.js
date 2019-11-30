import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { changeBgColor } from '../modules/ui'
import { getQuotes } from '../utils'

function App(props) {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentQuote, setCurrentQuote] = useState()

  const { changeBgColor, color } = props

  useEffect(
    () => {
      const onMount = async () => {
        try {
          setLoading(true)
          const quotes = await getQuotes()
          setQuotes(quotes.quotes)
          setCurrentQuote(quotes.quotes[0])
        } catch (err) {
          console.error(err)
        } finally {
          setLoading(false)
        }
      }

      onMount()
      changeBgColor()
    },
    [changeBgColor]
  )

  if (loading) return <Loading />
  if (!currentQuote) return null

  const { quote: text, author } = currentQuote

  const tweetClkHandle = () => {
    const tweet = `"${text}" ${author}`
    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, '_blank')
  }

  const getRandomQuote = () => {
    const newIndex = Math.floor(Math.random() * (quotes.length - 1))
    setCurrentQuote(quotes[newIndex])
    changeBgColor()
  }

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

export default connect(
  state => ({
    color: state.ui.currentColorClass,
  }),
  { changeBgColor }
)(App)
