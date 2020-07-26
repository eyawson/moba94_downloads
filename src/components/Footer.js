import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer"
        style={
            props.timeout ? {
                display: 'none'
            } : {}
        } >
        <p className="copyright" > &copy; Moba'94 Design: <a href="https://ebow.me" target="_blank">Ebow Yawson</a>. <a href="https://en.wikipedia.org/wiki/Mfantsipim_School" target="_blank">Mfantsipim School</a>. Built with: <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer