import './Footer.css';
import logo from '../../assets/orangeLogo.svg';
const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-upper'>
        <div className='logo-icon'>
          <img src={logo} alt='' />
        </div>
        <div>
          <h4>Product</h4>
          <p>Features</p>

          <p>Pricing</p>
          <p>Changelog</p>
          <p>Support</p>
        </div>
        <div>
          <h4>Legal</h4>
          <p>Terms of Privacy</p>
          <p>Privacy Policy</p>
          <p>Security</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div>
          <h4>Social</h4>
          <p>Dribble</p>
          <p>Behance</p>
          <p>Discord</p>
        </div>
      </div>

      <div>
        <span>All rights reserved.© 2024 ThinkMetal</span>
      </div>
    </div>
  );
};

export default Footer;
