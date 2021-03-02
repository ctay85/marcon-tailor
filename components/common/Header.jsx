
// Dependencies
import Link from 'next/link'
import SVG from 'react-inlinesvg'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Data
import { contentCN, contentEN } from 'data'

// Store
import { localeUpdate } from 'store/actions'
import { LOCALE_ENGLISH, LOCALE_CHINESE } from 'store/constants'

// Component
export default function Header () {
  const router = useRouter()
  const dispatch = useDispatch()
  const { ui, locale } = useSelector( state => state )
  const [ activeLocale, setActiveLocale ] = useState(LOCALE_ENGLISH)

  //
  const onClick = () => {
    if ( router.pathname === '/' ) {
      router.reload()
    }
  }

  //
  const changeLocale = key => {
    if ( key === LOCALE_CHINESE ) {
      dispatch(localeUpdate(contentCN))
    } else {
      dispatch(localeUpdate(contentEN))
    }

    setActiveLocale(key)
  }

  //
  return (
    <header className="global__header" data-theme={ ui.headerTheme }>
      <div className="left">
        &nbsp;
      </div>

      <div className="center">
        <Link href="/">
          <a className="btn__logo" onClick={ onClick }>
            <SVG src={ `${process.env.BASE_PATH}/img/common/Logo-Tailor-01-White-188x30.svg` } />
          </a>
        </Link>
      </div>

      <div className="right">
        <div className="locale">
          <button data-active={ activeLocale === LOCALE_ENGLISH } onClick={ () => changeLocale(LOCALE_ENGLISH) }>EN</button>
          <span></span>
          <button data-active={ activeLocale === LOCALE_CHINESE } onClick={ () => changeLocale(LOCALE_CHINESE) }>中文</button>
        </div>
      </div>
    </header>
  )
}
