import { applyMiddleware } from 'redux'

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'

function fetch(store) {
  return next => action => {
    if (!action.fetch) return next(action)
    const {
      type,
      fetch: { url, options },
    } = action
    store.dispatch({
      type: type + REQUEST,
    })
    fetch(url, options)
      .then(res => res.json())
      .then(payload => {
        store.dispatch({ type: type + SUCCESS, payload })
      })
      .catch(() => {
        store.dispatch({ type: type + ERROR })
      })
  }
}

export default applyMiddleware(fetch)
