import { Link } from "gatsby"
import React from "react"

// import './header.module.scss';
import headerStyles from './header.module.scss';

const Header = ({ siteTitle }) => (
    <header className={headerStyles.header}>
      <Link to="/"><h1>Sergej Vasiljev</h1></Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} to="/">Home</Link></li>
          <li><Link className={headerStyles.navItem} to="/about">About</Link></li>
          <li><Link className={headerStyles.navItem} to="/blog">blog</Link></li>
          <li><Link className={headerStyles.navItem} to="/contact">contact</Link></li>
        </ul>
      </nav>
    </header>
  )



export default Header
