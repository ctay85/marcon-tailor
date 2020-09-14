
// Dependencies
import Link from 'next/link'
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'

// Component
const Header = () => {
  const router = useRouter()
  console.log(router);

  return (
    <header className="global__header" data-slug={ router.pathname }>
      <div className="left">
        <nav>
          <ul>
            <li><Link href="/design/#architecture"><a className="btn btn--line-hover">Architecture</a></Link></li>
            <li><Link href="/design/#wind-veil"><a className="btn btn--line-hover">Wind Veil</a></Link></li>
            <li><Link href="/design/#interiors"><a className="btn btn--line-hover">Interiors</a></Link></li>
          </ul>
        </nav>
      </div>

      <div className="center">
        <Link href="/">
          <a className="btn__logo">
            <SVG src="/img/common/Logo-Tailor-01-White-188x30.svg" />
          </a>
        </Link>
      </div>

      <div className="right">
        <Link href="#register"><a className="btn btn__register btn--solid">Register Today</a></Link>
      </div>
    </header>
  )
}

// Export
export default Header
