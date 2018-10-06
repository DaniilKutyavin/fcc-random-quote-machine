import React from 'react'
import { connect } from 'react-redux'
import { fetchAllQuotes, getRandomQuote } from '../modules'
import './App.css'

class App extends React.PureComponent {
  componentDidMount = () => {
    const url =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    this.props.fetchAllQuotes(url)
  }

  componentDidUpdate = prevProps => {
    if (this.props.loading !== prevProps.loading) {
      console.log('Loading updated')
      this.props.getRandomQuote()
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
      <div id="app">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div id="quote-box">
            <p id="text">{text}</p>
            <small id="author">{author}</small>
            <div>
              <button id="new-quote" onClick={() => getRandomQuote()}>
                Get quote
              </button>
              <button id="tweet-quote" onClick={this.tweetClkHandle}>
                Tweet quote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quote: state.currentQuote,
  loading: state.loading,
})

export default connect(
  mapStateToProps,
  { fetchAllQuotes, getRandomQuote }
)(App)
