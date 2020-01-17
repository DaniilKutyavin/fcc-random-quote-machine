import React, { useEffect, useState } from 'react'
import { getQuotes } from '../utils'
import Card from './card/Card'
import Loader from './loader/Loader'

export default function App() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentQuote, setCurrentQuote] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const ANIMATION_DURATION = 1200
        const [quotes] = await Promise.all([getQuotes(), wait(ANIMATION_DURATION)])

        setQuotes(quotes)
        setCurrentQuote(quotes[0])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <Loader size="8em" />
  if (!currentQuote) return null

  const { text, author } = currentQuote

  const getRandomQuote = () => {
    const newIndex = Math.floor(Math.random() * (quotes.length - 1))
    setCurrentQuote(quotes[newIndex])
  }

  return <Card text={text} author={author} onNewQuoteClick={getRandomQuote} />
}

const wait = duration => new Promise(resolve => setTimeout(resolve(), duration))
