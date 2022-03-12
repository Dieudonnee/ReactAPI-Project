import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './footer.css'

const Footerdown = () => {
  return (
    <div className="footer">
      <div className="container">
          <div className="colm col-1">
              <h1>De<span className="primary">Fi</span></h1>
          </div>
          <div className="col">
              <h5>support</h5>
              <span className="bar">
                <a href='/'>contact us</a>
                <a href='/'>chat </a>
                <a href='/'>Help Center</a>
                <a href='/'>FAQ</a>
              </span>
          </div>
          <div className="col">
              <h5>Developers</h5>
              <span className="bar"></span>
                <a href='/'>cloud</a>
                <a href='/'>commerce </a>
                <a href='/'>Pro</a>
                <a href='/'>API</a>
              
          </div>
          <div className="col">
              <h5>company</h5>
              <span className="bar"></span>
                <a href='/'>About</a>
                <a href='/'>information </a>
                <a href='/'>legal</a>
                <a href='/'>privacy</a>
              
          </div>
          <div className="col">
              <h5>social link</h5>
              <span className="bar"></span>
                <a href='/'><FaFacebook className="icons"/></a>
                <a href='/'><FaGithub className="icons"/> </a>
                <a href='/'><FaLinkedin className="icons"/></a>
                <a href='/'><FaTwitter className="icons"/></a>
              
          </div>
      </div>
    </div>
  )
}

export default Footerdown