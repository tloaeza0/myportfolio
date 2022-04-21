import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';

export const Footer = () => {
    return (
        <div>
            
            <ul className = "ssicons">
                <li><a href="https://github.com/tloaeza0" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/teresaloaeza/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a></li>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook/></a></li>
            </ul>
            <h4> &copy; Teresa Loaeza 2022 </h4>
        </div>
    )
}
export default Footer;