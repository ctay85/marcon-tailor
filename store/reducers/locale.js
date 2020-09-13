
import { LOCALE_UPDATE_SUCCESS, LOCALE_ENGLISH } from 'store/constants'

const initialState = LOCALE_ENGLISH

export function locale (state = initialState, action) {
  switch (action.type) {

    case LOCALE_UPDATE_SUCCESS:
      return action.locale

    default:
      return state

  }
}
