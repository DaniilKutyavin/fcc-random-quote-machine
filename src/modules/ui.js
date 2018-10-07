import { name as appname } from '../../package.json'

const namespace = 'ui'
const prefix = `${appname}/${namespace}`

/* Action types */
const CHANGE_BG_COLOR = `${prefix}/CHANGE_BG_COLOR`

/* Reducer */

const initialState = {
  possibleColorClasses: [
    'aquamarine',
    'blueviolet',
    'chocolate',
    'darkcyan',
    'forestgreen',
    'indianred',
    'indigo',
    'khaki',
    'lightcoral',
    'mediumseagreen',
    'salmon',
    'sandybrown',
    'sienna',
  ],
  currentColorClass: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BG_COLOR:
      return {
        ...state,
        currentColorClass:
          state.possibleColorClasses[
            Math.floor(Math.random() * (state.possibleColorClasses.length - 1))
          ],
      }
    default:
      return state
  }
}

/* Action creators */
export function changeBgColor() {
  return {
    type: CHANGE_BG_COLOR,
  }
}
