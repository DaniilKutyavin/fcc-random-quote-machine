import React, { useEffect, useState } from 'react'
import { getQuotes } from '../utils'
import Card from './card/Card'
import Loader from './loader/Loader'

export default function App() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentQuote, setCurrentQuote] = useState()

  useEffect(() => {
    const onMount = async () => {
      try {
        setLoading(true)

        const ANIMATION_DURATION = 1200

        const quotes = await getQuotesWithThrottle(ANIMATION_DURATION)
        setQuotes(quotes.quotes)
        setCurrentQuote(quotes.quotes[0])
      } catch (err) {
        console.error(err)
      } finally {
        // setLoading(false)
      }
    }

    onMount()
  }, [])

  if (loading) return <Loader size="8em" />
  if (!currentQuote) return null

  const { quote, author } = currentQuote

  const getRandomQuote = () => {
    const newIndex = Math.floor(Math.random() * (quotes.length - 1))
    setCurrentQuote(quotes[newIndex])
  }

  return <Card text={quote} author={author} onNewQuoteClick={getRandomQuote} />
}

async function getQuotesWithThrottle(duration = 200) {
  const throttlePromise = () => new Promise(resolve => setTimeout(resolve, duration))
  const [quotes] = await Promise.all([getQuotes(), throttlePromise()])
  return quotes
}
