import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
    <header>
      <h1>Sergej Vasiljev</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">blog</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </nav>
    </header>
  )



export default Header
