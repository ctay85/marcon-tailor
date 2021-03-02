import { LOCALE_UPDATE } from 'store/constants'

export function localeUpdate(locale) {
  return { type : LOCALE_UPDATE, locale }
}
