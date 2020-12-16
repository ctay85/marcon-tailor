
// Dependencies
import Link from 'next/link'
import SVG from 'react-inlinesvg'

// Component
export default function Header () {
  return (
    <header className="global__header">
      <Link href="/">
        <a className="btn__logo">
          <SVG src={ `${process.env.BASE_PATH}/img/common/Logo-Tailor-01-White-188x30.svg` } />
        </a>
      </Link>
    </header>
  )
}
