import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <div className="navLogo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
    </div>
    <ul className="linksCard">
      <li>
        <Link className="navLink" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/product">
          Products
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
      </li>
      <Link className="buttonLink" to="/login">
        <button type="button">Logout</button>
      </Link>
    </ul>
  </nav>
)

export default Header
