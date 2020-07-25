import PropTypes from 'prop-types'
import React from 'react'
// import logo from '../images/moba logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="fa file">
        {/* <img src={logo} alt="" /> */}
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Documents</h1>
        <p>
          Here are all of our documents
          <br />
          <span> for your perusal.</span>
          <br />
          Please note that this website is in a beta version
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            File A
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            File B
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            FIle C
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
