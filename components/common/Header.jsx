
// Dependencies
import Link from 'next/link'
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'
import { useRef, useEffect, useState } from 'react'

// Component
const Header = () => {
  const [ isVisible, setIsVisible ] = useState(false)
  const router = useRouter()

  //
  useEffect( () => {
    setTimeout( () => setIsVisible(true), 500)
    return () => setIsVisible(false)
  }, [])

  //
  return (
    <header className="global__header" data-slug={ router.pathname } data-visible={ isVisible }>
      <div className="left">
        {
          router.pathname === '/design' && (
            <nav>
              <ul>
                <li><Link href="/design/#architecture"><a className="btn btn--line-hover">Architecture</a></Link></li>
                <li><Link href="/design/#wind-veil"><a className="btn btn--line-hover">Wind Veil</a></Link></li>
                <li><Link href="/design/#interiors"><a className="btn btn--line-hover">Interiors</a></Link></li>
              </ul>
            </nav>
          )
        }
      </div>

      <div className="center">
        <Link href="/">
          <a className="btn__logo">
            <SVG src="/img/common/Logo-Tailor-01-White-188x30.svg" />
          </a>
        </Link>
      </div>

      <div className="right">
        <Link href="#register"><a className="btn__register">Register</a></Link>
      </div>
    </header>
  )
}

// Export
export default Header
