import './Footer.css'
import logo from '../../assets/logo.png'
import { TfiWorld } from 'react-icons/tfi';
import { FiTwitter } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <hr />
          <h2>
            Be part of a big evolution across African countries 
            by becoming the powering sources to African hearts
          </h2>
        </div>

        <div className="footer-middle">
          <img src={logo} alt="" />
          <div className="mid-icontext">
            <div className="mid-icon">
              <div className="all-icon">
                
                  <a target="_blank" rel="noreferrer" href=''><TfiWorld color='#CBAB81' size='24px' /></a>
                
                  <a target="_blank" rel="noreferrer" href=''><FiTwitter color='#CBAB81' size='24px' /></a>
               
                  <a target="_blank" rel="noreferrer" href=''><FaDiscord color='#CBAB81' size='24px' /></a> 
                
              </div>
              <hr />
            </div>
            <p>tweet conference</p>
          </div>
        </div>

        <div className="footer-bottom">
          <h6>Stalk with us @</h6>
          <p>www.netrepreneurs.io</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer