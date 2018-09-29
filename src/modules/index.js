import { name as appname } from '../../package.json'

/* Action types  */
import { REQUEST, SUCCESS, ERROR } from '../middlewares'
const FETCH_ALL_QUOTES = `${appname}/FETCH_ALL_QUOTES`

const initialState = {
  data: [],
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
        data: payload,
        loading: false,
      }
    case FETCH_ALL_QUOTES + ERROR:
      return {
        ...state,
        loading: false,
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
