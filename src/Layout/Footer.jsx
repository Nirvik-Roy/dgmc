import React from 'react'
import img from '../assets/939610874_dream.png'
const Footer = () => {
  return (
    <div className='footer_wrapper'>
    <div class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row d-flex justify-content-start align-items-center">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta d-flex justify-content-start align-items-center">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>Belya Maharajpur, District - West Medinipur, <br/>West Bengal - 721260</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>+91-90022-22268</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>dreamgoldenmemories</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src={img} class="img-fluid" alt="logo"/></a>
                            </div>
                            {/* <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div> */}
                            <div class="footer-social-icon">
                                {/* <span>Follow us</span> */}
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 text-start text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2025, All Right Reserved <span style={{
                              textDecoration:'none',
                              color:'rgb(52, 131, 221)'
                            }}> Belyamaharajpur Dream Golden Memories Club </span></p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                              
                                <li style={{
                                  color:'#878787'
                                }}>Terms & Conditions</li>
                                <li style={{
                                  color:'#878787'
                                }}>Privacy</li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
