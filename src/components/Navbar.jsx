import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from '../assets/logo_navbar.png'
import typography from '../assets/typography_logo.png'

export default () => {
  return (
    <nav style={{ marginBottom: "2.5rem"}} className="backgroundNavbar">
      <div className="nav-wrapper">
        <Link to="/">
          <img src={logo} style={{ width: "3rem", height: "3rem", marginLeft: "4rem", marginTop: "0.6rem" }}/>
          <img src={typography} style={{ width: "11rem", marginTop: "0.6rem" }}/>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down" style={{borderLeft: "0.1rem solid #485460"}}>
          <li><Link to="/favorite">Favorite</Link></li>
        </ul>
      </div>
    </nav>
  )
}