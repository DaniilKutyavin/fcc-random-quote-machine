import React from 'react'
import { connect } from 'react-redux'
import { fetchAllQuotes } from '../modules'
import './App.css'

class App extends React.PureComponent {
  componentDidMount = () => {
    const url =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    this.props.fetchAllQuotes(url)
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
      fetchAllQuotes,
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
              <button id="new-quote" onClick={() => fetchAllQuotes()}>
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
  quote: state.data.reduce((acc, cur, curIndex, arr) => {
    if (curIndex === 0) {
      acc.push(Math.round(Math.random() * (arr.length - 1)))
    }
    if (curIndex === acc[0]) {
      acc.push(cur)
    }
    return acc
  }, [])[1],
  loading: state.loading,
})

export default connect(
  mapStateToProps,
  { fetchAllQuotes }
)(App)
