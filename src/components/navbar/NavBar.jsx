import React from 'react'
import { Link } from 'react-router-dom'
import bookLogo from '../../assists/book01.png'

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark container">
        <Link to="/" className="navbar-brand">
          <img src={bookLogo} width="30" height="30" className="d-inline-block align-top mx-3" alt="" />
          Find-the-books
        </Link>
      </nav>
    </>
  )
}
