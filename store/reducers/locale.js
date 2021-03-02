
// Data
import { contentCN, contentEN } from 'data'

// Store
import { LOCALE_UPDATE } from 'store/constants'

//
const initialState = contentEN

//
export function locale (state = initialState, action) {
  switch (action.type) {

    case LOCALE_UPDATE:
      return action.locale

    default:
      return state

  }
}
