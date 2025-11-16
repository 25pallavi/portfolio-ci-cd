import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
            <h5>Pallavi Kumari</h5>
             <ul className="FooterList">
                <li><a href="#aboutUs">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#aboutUs">Experience</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#education">Education</a></li>
            </ul> 
            <ul className='socil-media'>
                {/* <li><Link to="/"><FaFacebook />
                </Link></li>
                <li><Link to="/"><FaTwitter />
                </Link></li>           */}
                <li><Link target="_blank" to="https://www.linkedin.com/in/pallavi-kumari-14767a218/"><FaLinkedin />
                </Link></li>
                <li><Link to="https://www.instagram.com/s._.pallavi?igsh=MW11ZW5xdGgxa2xyOQ=="><FaInstagramSquare />
                </Link></li>
            </ul>  

            <div className="footer-bottom">
                <p>&copy; 2025 Pallavi Kumari. All rights reserved.</p>
            </div>
        </div>
        </div>
    );
}

export default Footer;
