import React from 'react'

import './Card.scss'

export default function Card({ text, author, onNewQuoteClick, color }) {
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

      <div className="button-group quote-card__buttons">
        <button className="button button-tweet" onClick={tweetClkHandle}>
          Tweet quote
        </button>
        <button className={`button button-primary ${color}`} onClick={onNewQuoteClick}>
          New quote
        </button>
      </div>
    </div>
  )
}
