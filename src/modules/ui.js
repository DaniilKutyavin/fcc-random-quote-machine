import { name as appname } from '../../package.json'

const namespace = 'ui'
const prefix = `${appname}/${namespace}`

/* Action types */
const CHANGE_BG_COLOR = `${prefix}/CHANGE_BG_COLOR`

/* Reducer */

const initialState = {
  possibleColorClasses: [
    'blueviolet',
    'chocolate',
    'darkcyan',
    'forestgreen',
    'indianred',
    'indigo',
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
      const getColor = (curColor, colors) => {
        let newColor
        do {
          newColor = colors[Math.floor(Math.random() * (colors.length - 1))]
        } while (newColor === curColor)
        return newColor
      }
      return {
        ...state,
        currentColorClass: getColor(
          state.currentColorClass,
          state.possibleColorClasses
        ),
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
