import React from 'react'
import './section4.css'
import {FaTelegram,FaInstagram,FaLinkedin,FaYoutube} from 'react-icons/fa';

const Section4 = () => {
  return (
    
    <div className='section4'>
          <div class="contactForm">
            <h3>Send Message</h3>
            <div class="inputBox">
                <input type="text" placeholder="Name"></input>
            </div>
            <div class="inputBox">
                <input type="text" placeholder="Email"></input>
            </div>
            <div class="inputBox">
                <textarea placeholder="Write something....."></textarea>
            </div>
            <div class="buttons">
                <a href="/submit.txt" target="_blank">
                    <button>submit</button></a>
            </div>
            </div>
            <footer class="footer">
              <div class="container">
                <div class="row">
                  <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                      <li><a href="#">about us</a></li>
                      <li><a href="#">our services</a></li>
                      <li><a href="#">privacy policy</a></li>
                      <li><a href="#">programs</a></li>
                    </ul>
                  </div>
                  <div class="footer-col">
                    <h4>get Help</h4>
                    <ul>
                      <li><a href="#"> Contact us</a></li>
                    </ul>
                  </div>
                  <div class="footer-col">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                      <a href="https://t.me/+mABxijuFbBVjZjE1"><i className="fab-telegram"><FaTelegram></FaTelegram></i></a>
                      <a href="https://youtube.com/@lokeshrajput9999"><i className="fab-youtube"><FaYoutube></FaYoutube></i></a>
                      <a href="https://instagram.com/official_lokeshrajput?igshid=YmMyMTA2M2Y="><i className="fab-instagram"><FaInstagram></FaInstagram></i></a>
                      <a href="https://www.linkedin.com/in/lokesh-singh-9283101bb"><i className="fab-linkdin-in"><FaLinkedin></FaLinkedin></i></a>
                      </div>
                  </div>
                </div>
              </div>
            </footer>

        </div>
  )
}

export default Section4