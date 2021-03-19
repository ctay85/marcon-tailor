
import { UI_UPDATE_HEADER_THEME_SUCCESS, UI_HEADER_THEME_WHITE, UI_HEADER_THEME_BLUE, UI_UPDATE_NAV_OPEN } from 'store/constants'

const initialState = {
  headerTheme : UI_HEADER_THEME_BLUE,
  navOpen : false
}

export function ui (state = initialState, action) {
  switch (action.type) {

    //
    case UI_UPDATE_HEADER_THEME_SUCCESS:
      return {
        ...state,
        headerTheme : action.headerTheme
      }

    //
    case UI_UPDATE_NAV_OPEN:
      return {
        ...state,
        navOpen : action.navOpen
      }

    //
    default:
      return state

  }
}
