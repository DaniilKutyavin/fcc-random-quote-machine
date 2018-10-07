import React from 'react'
import { connect } from 'react-redux'
import { fetchAllQuotes, getRandomQuote } from '../modules/quotes'
import { changeBgColor } from '../modules/ui'

class App extends React.PureComponent {
  componentDidMount = () => {
    const url =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    this.props.fetchAllQuotes(url)
    this.props.changeBgColor()
  }

  componentDidUpdate = prevProps => {
    if (this.props.loading !== prevProps.loading) {
      this.props.getRandomQuote()
    }
    if (this.props.quote !== prevProps.quote) {
      this.props.changeBgColor()
    }
  }

  tweetClkHandle = () => {
    const {
      quote: { quote: text, author },
    } = this.props
    const tweet = `"${text}" ${author}`
    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, '_blank')
  }
  render() {
    const {
      quote: { quote: text, author },
      loading,
      getRandomQuote,
    } = this.props
    return (
      <div id="app" className={this.props.color}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div id="quote-box">
            <p id="text">
              &ldquo;
              {text}
              &rdquo;
            </p>
            <p id="author">{author}</p>
            <div id="buttons">
              <button id="tweet-quote" onClick={this.tweetClkHandle}>
                Tweet quote
              </button>
              <button
                id="new-quote"
                className={this.props.color}
                onClick={() => getRandomQuote()}>
                New quote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
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
