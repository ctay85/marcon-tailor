
import { LOCALE_UPDATE_SUCCESS } from 'store/constants'

export function localeUpdateDataSuccess(locale) {
  return {
    type : LOCALE_UPDATE_SUCCESS,
    locale
  }
}

export function localeUpdateData (locale) {
  return dispatch => dispatch( localeUpdateDataSuccess(locale) )
}
