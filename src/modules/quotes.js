import { name as appname } from '../../package.json'
import { REQUEST, SUCCESS, ERROR } from '../middlewares'

const namespace = 'quotes'
const prefix = `${appname}/${namespace}`

/* Action types  */
const FETCH_ALL_QUOTES = `${prefix}/FETCH_ALL_QUOTES`
const GET_RANDOM_QUOTE = `${prefix}/GET_RANDOM_QUOTE`

const initialState = {
  data: [
    {
      quote: '',
      author: '',
    },
  ],
  currentQuote: {},
  loading: false,
}

/* reducer */
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ALL_QUOTES + REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_ALL_QUOTES + SUCCESS:
      return {
        ...state,
        data: payload.quotes,
        loading: false,
      }
    case FETCH_ALL_QUOTES + ERROR:
      return {
        ...state,
        loading: false,
      }
    case GET_RANDOM_QUOTE:
      return {
        ...state,
        currentQuote:
          state.data[Math.floor(Math.random() * (state.data.length - 1))],
      }
    default:
      return state
  }
}

/* action creators */
export function fetchAllQuotes(url, options) {
  return {
    type: FETCH_ALL_QUOTES,
    fetch: {
      url,
      options,
    },
  }
}

export function getRandomQuote(arrLen) {
  return {
    type: GET_RANDOM_QUOTE,
  }
}
