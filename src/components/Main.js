import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/entrance.jpg'
import pic02 from '../images/cake.jpg'
import pic03 from '../images/group2.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Dues</h2>
          <span className="image main">
            <img src={pic01} alt="The main gate of Mfantsipim" />
          </span>
          <p>
            Moba'94 Association is an independent orgnization, fully supported by dues
            and donations. Your dues allows us to coordinate and implement all of the programs
            for our The School and alumni.
          </p>
          <p>
            In this document, you will find a list of all members of the 1994 year
            group. It shows who have paid and who are yet to pay their dues.
          </p>
          <p>
            To download, click <a href="/file/moba94_dues.xlsx" download>here</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Constitution</h2>
          <span className="image main">
            <img src={pic02} alt="That 20 year anniversary cake" />
          </span>
          <p>
            This constitution document is currently being worked on and is not
            available for download at the moment. Sorry for any inconvenince.
          </p>
          <p>
            To download, click <a href="#">here</a>.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Welfare</h2>
          <span className="image main">
            <img src={pic03} alt="Donation to Ankaful Psychiatric Home" />
          </span>
          <p>
            This welfare document is currently being worked on and is not
            available for download at the moment. Sorry for any inconvenince.
          </p>
          <p>
            To download, click <a href="#">here</a>.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:zigmagh@gmail.com ">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/KwabotweOnline"
                target="_blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/413054355423117"
                target="_blank"
                className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/eyawson/moba94_downloads/"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
