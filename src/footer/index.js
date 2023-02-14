import {React} from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
      <>
        <footer>
            <div className='grid1'>
                <div className='grid1-1'>
                    <h3>Company</h3>
                    <ul className='listaFooter'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='grid1-2'>
                    <h3>Support</h3>
                    <ul className='listaFooter'>
                        <li>FAQ</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
            </div>
            <div className='grid1-3'>
                <h3>Follow Us</h3>
                <ul className='listaFooter'>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
        </footer>
      </>
    );
  }
  
export default Footer;