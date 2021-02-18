
// Dependencies
import Link from 'next/link'
import SVG from 'react-inlinesvg'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

// Component
export default function Header () {
  const router = useRouter()
  const ui = useSelector( state => state.ui )

  const onClick = () => {
    if ( router.pathname === '/' ) {
      router.reload()
    }
  }

  //
  return (
    <header className="global__header" data-theme={ ui.headerTheme }>
      <Link href="/">
        <a className="btn__logo" onClick={ onClick }>
          <SVG src={ `${process.env.BASE_PATH}/img/common/Logo-Tailor-01-White-188x30.svg` } />
        </a>
      </Link>
    </header>
  )
}
