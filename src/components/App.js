import React, { useEffect, useState } from 'react'
import { getQuotes } from '../utils'
import Card from './card/Card'
import { Loading } from './Loading'

export default function App() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentQuote, setCurrentQuote] = useState()

  useEffect(() => {
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
  }, [])

  if (loading) return <Loading />
  if (!currentQuote) return null

  const { quote, author } = currentQuote

  const getRandomQuote = () => {
    const newIndex = Math.floor(Math.random() * (quotes.length - 1))
    setCurrentQuote(quotes[newIndex])
  }

  return <Card text={quote} author={author} onNewQuoteClick={getRandomQuote} />
}
