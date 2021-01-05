
// Dependencies
import Link from 'next/link'
import SVG from 'react-inlinesvg'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

// Component
export default function Header () {
  const ui = useSelector( state => state.ui )

  //
  return (
    <header className="global__header" data-theme={ ui.headerTheme }>
      <Link href="/">
        <a className="btn__logo">
          <SVG src={ `/img/common/Logo-Tailor-01-White-188x30.svg` } />
        </a>
      </Link>
    </header>
  )
}
