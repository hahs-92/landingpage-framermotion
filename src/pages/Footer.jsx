import { motion } from 'framer-motion';
//STYLES
import '../styles/pages/Footer.scss'
//COMPONENTS
import BrandName from '../components/BrandName'
//ICONS
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
//ANIMATION
import { fromDown, fromUp } from '../helpers/animations'
//HOOKS
import { useScroll } from '../hooks/useScroll';

const Footer = () => {

    const [ element, controls] = useScroll()

    return(
        <footer className='footer-container' ref={element}>
            <div className='container'>
                <div className='main-container'>
                    <motion.section className="news-letter"
                        variants={fromUp}
                        animate={controls}
                        transition= {{duration: 0.5}}
                    >
                        <BrandName isFooter={ true } />

                        <p>Join our newsletter to get updated with our Offers & Discounts.</p>

                        <section className='mail'>
                            <input type="email" placeholder='Please Enter Your Email' />

                            <button>
                                <AiOutlineSend />
                            </button>
                        </section>
                    </motion.section>

                    <motion.section className='quick-links'
                        variants={fromDown}
                        animate={controls}
                        transition= {{duration: 0.5}}
                    >
                        <h3>Quick Links</h3>

                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Testimonial</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </motion.section>

                    <motion.section className='industries'
                        variants={fromUp}
                        animate={controls}
                        transition= {{duration: 0.5}}
                    >
                        <h3>Industires</h3>

                        <ul>
                            <li>
                                <a href="#">Website Development</a>
                            </li>
                            <li>
                                <a href="#">Mobile App Development</a>
                            </li>
                            <li>
                                <a href="#">Website Design</a>
                            </li>
                            <li>
                                <a href="#">Mobile App Design</a>
                            </li>
                            <li>
                                <a href="#">Digital Marketing</a>
                            </li>
                            <li>
                                <a href="#">Graphic Design</a>
                            </li>
                            <li>
                                <a href="#">IOS App Development</a>
                            </li>
                        </ul>
                    </motion.section>

                    <motion.section className='touch'
                        variants={fromDown}
                        animate={controls}
                        transition= {{duration: 0.5}}
                    >
                        <h3>Get in Touch</h3>

                        <div className="touch-section">
                            <section className="icon">
                                <MdEmail />
                            </section>

                            <section className="detail">
                                <div className="detail-name">Email</div>

                                <div className="detail-content">
                                    <a href="#">kishansheth21@gmail.com</a>
                                </div>
                            </section>
                        </div>

                        <div className="touch-section">
                            <section className="icon">
                                <FaPhoneAlt />
                            </section>
                            <section className="detail">
                                <div className="detail-name">Phone</div>

                                <div className="detail-content">
                                    <a href="#">+91 7551231231</a>
                                </div>
                            </section>
                        </div>

                        <div className="touch-section">
                            <section className="icon">
                                <ImLocation />
                            </section>
                            <section className="detail">
                                <div className="detail-name">Location</div>

                                <div className="detail-content">
                                    <a href="#"> 32 StreetOne Boards, GJ 560123</a>
                                </div>
                            </section>
                        </div>

                    </motion.section>

                </div>

                <section className='copyright'>
                        <div className="copy">
                            <p>Copyright c 2021. All Rights Reserved.</p>
                        </div>

                        <div className="icons">
                            <article className="icon">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                            </article>

                            <article className="icon">
                                <a href="#">
                                    <AiFillInstagram />
                                </a>
                            </article>

                            <article className="icon">
                                <a href="#">
                                    <AiFillLinkedin />
                                </a>
                            </article>

                            <article className="icon">
                                <a href="#">
                                    {" "}
                                    <FaTwitter />
                                </a>
                            </article>
                        </div>
                    </section>
            </div>
        </footer>
    )
}

export default Footer
