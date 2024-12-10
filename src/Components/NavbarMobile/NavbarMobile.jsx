import './NavbarMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NavbarMobile = ({ isOpen, toggleMenu }) => {
  return (
      <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
          <div className="close-icon" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faTimes} />
          </div>
          <img src="./images/logo.png" alt="logo" className='mobile-logo' />
          <ul className="mobile-nav-links">
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#services" onClick={toggleMenu}>Services</a></li>
              <li><a href="#products" onClick={toggleMenu}>Products</a></li>
              <li><a href="#reviews" onClick={toggleMenu}>Reviews</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
      </div>
  );
};

export default NavbarMobile;
