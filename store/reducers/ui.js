
import { UI_UPDATE_HEADER_THEME_SUCCESS, UI_HEADER_THEME_WHITE, UI_HEADER_THEME_BLUE } from 'store/constants'

const initialState = {
  headerTheme : UI_HEADER_THEME_BLUE
}

export function ui (state = initialState, action) {
  switch (action.type) {

    case UI_UPDATE_HEADER_THEME_SUCCESS:
      return {
        ...state,
        headerTheme : action.headerTheme
      }

    default:
      return state

  }
}
