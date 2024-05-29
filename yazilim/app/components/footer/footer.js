"use client"
import React from 'react'
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
    
  return (
    <footer id="contact" className="foot">
        <div className="contact-form">
            <form action="http://localhost/iletisim/iletisimm-post.php" method='POST'>
            
                <h4 className="text-center heading-medium">Bizimle  İletişime Geçin</h4> <br/>

                <div className="form-section">
                    <input 
                        type="text"
                        className="form-control"
                        name="isim"
                        placeholder="İsminiz"
                    />
                </div>

                <div className="form-section">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Mail Adresiniz"
                    />
                </div>

                <div className="form-section">
                    <textarea
                        className="form-control" 
                        name="mesaj"
                       rows="7"
                       placeholder="Mesajınız">
                    </textarea>
                </div>

                <button type="submit" className="btn-form">Gönder</button>
            </form>
            <div className='contact-us'>
            <a title='facebook' target='_blank' href='https://www.facebook.com/profile.php?id=61556800207664'><FaFacebook /></a>
            <a title='twitter' target='_blank' href='https://twitter.com/ysgzm'><FaTwitter /></a>
            <a title='instagram' target='_blank' href='https://www.instagram.com/s.y.g.365/'><FaInstagram /></a>
            <a title='linkedin' target='_blank' href='https://www.linkedin.com/in/gizem-p-437701284/?trk=opento_sprofile_topcard'><FaLinkedin /></a>
            </div>
            
        </div>

    </footer>
  )
}
export default Footer;