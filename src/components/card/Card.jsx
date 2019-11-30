import React from 'react'

import './Card.scss'
import Button from '../button/Button'

export default function Card({ text, author, onNewQuoteClick }) {
  const tweetClkHandle = () => {
    const tweet = `"${text}" ${author}`
    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, '_blank')
  }

  return (
    <div className="quote-card">
      <p className="quote-card__text">
        &ldquo;
        {text}
        &rdquo;
      </p>

      <span className="quote-card__author">{author}</span>

      <Button.ButtonGroup>
        <Button variant="tweet" onClick={tweetClkHandle}>
          Tweet quote
        </Button>
        <Button variant="primary" onClick={onNewQuoteClick}>
          New quote
        </Button>
      </Button.ButtonGroup>
    </div>
  )
}
