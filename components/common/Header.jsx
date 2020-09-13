
// Dependencies
import Link from 'next/link'

// Component
const Header = () => (
  <header className="global__header">
    <div className="left">
      <nav>
        <ul>
          <li><Link href=""><a className="btn btn--line-hover">Architecture</a></Link></li>
          <li><Link href=""><a className="btn btn--line-hover">Wind Veil</a></Link></li>
          <li><Link href=""><a className="btn btn--line-hover">Interiors</a></Link></li>
        </ul>
      </nav>
    </div>

    <div className="center">
      <Link href="/"><a className="btn__logo">Tailor</a></Link>
    </div>

    <div className="right">
      <Link href=""><a className="btn btn__register btn--solid btn--dusk">Register Today</a></Link>
    </div>
  </header>
)

// Export
export default Header
