
import { UI_UPDATE_HEADER_THEME_SUCCESS, UI_UPDATE_NAV_OPEN } from 'store/constants'

//
export function uiUpdateHeaderThemeSuccess(headerTheme) {
  return {
    type : UI_UPDATE_HEADER_THEME_SUCCESS,
    headerTheme
  }
}

//
export function uiUpdateHeaderTheme (headerTheme) {
  return dispatch => dispatch( uiUpdateHeaderThemeSuccess(headerTheme) )
}

//
export function uiUpdateNavOpen(navOpen) {
  return { type : UI_UPDATE_NAV_OPEN, navOpen }
}
