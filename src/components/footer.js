import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo-1.png'
import Facebbook from '../assets/images/social-icons/facebbook.png'
import Telegram from '../assets/images/social-icons/telegram.png'
import Twitter from '../assets/images/social-icons/twitter.png'
import Youtube from '../assets/images/social-icons/youtube.png'


function Footer () {
  return (
    <>
      {/* <!--========= Footer Start ========== --> */}

      <footer className="footer-bg">
          <div className="container">
              <div className="row">
                  <div className="col-lg-3">
                      <img src={Logo} alt="" />
                      <p className="text-white mt-2">Lorem Ipsum is simply dummy 
                          text of the printing and 
                          typesetting industry. </p>
                      <ul className="list-unstyled d-flex mt-3">
                          <li><Link><img src={Facebbook} alt="facebbok" className="img-fluid" /></Link></li>
                          <li className="ms-2"><Link><img src={Telegram} alt="telegram" className="img-fluid" /></Link></li>
                          <li className="ms-2"><Link><img src={Twitter} alt="twiiter" className="img-fluid" /></Link></li>
                          <li className="ms-2"><Link><img src={Youtube} alt="youtube" className="img-fluid" /></Link></li>
                      </ul>
                  </div>
                  <div className="col-lg-3 footer-link-list">
                      <h4 className="text-white">Customer Support</h4>
                      <ul className="list-unstyled mt-4 ">
                          <li>
                              <h6 className="text-white">Returns & Warranty</h6>
                          </li>
                          <li>
                              <h6 className="text-white">Payments</h6>
                          </li>
                          <li>
                              <h6 className="text-white">Shipping</h6>
                          </li>
                          <li>
                              <h6 className="text-white">Terms and Services</h6>
                          </li>
                          <li>
                              <h6 className="text-white">Privacy Policy</h6>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-2 footer-link-list">
                      <h4 className="text-white">Corporate Info</h4>
                      <ul className="list-unstyled  mt-4 ">
                          <li>
                              <h6 className="text-white">About Us</h6>
                          </li>
                          <li>
                              <h6 className="text-white">Brands</h6>
                          </li>
                          <li>
                              <h6 className="text-white">Investors</h6>
                          </li>
                          <li>
                              <h6 className="text-white">Cookies</h6>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-2 footer-link-list">
                      <h4 className="text-white">Gift Card</h4>
                      <ul className="list-unstyled mt-4 ">
                          <li>
                              <h6 className="text-white">Buy Gift Cards</h6>
                          </li>
                          <li>
                              <h6 className="text-white">Redeem Card</h6>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-2 footer-link-list">
                      <h4 className="text-white">Location</h4>
                      <ul className="list-unstyled mt-4 ">
                          <li>
                              <h6 className="text-white">United State</h6>
                          </li>   
                      </ul>
                  </div>
              </div>
          </div>
      </footer>

      {/* <!--========= Footer End ========== --> */}
    </>
  )
}

export default Footer
