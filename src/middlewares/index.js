import logger from 'redux-logger'

export const REQUEST = '_REQUEST'
export const SUCCESS = '_SUCCESS'
export const ERROR = '_ERROR'

function fetchMW(store) {
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
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Response was not ok')
      })
      .then(payload => {
        store.dispatch({
          type: type + SUCCESS,
          payload,
        })
      })
      .catch(() => {
        store.dispatch({
          type: type + ERROR,
        })
      })
  }
}

export default [fetchMW, logger]
