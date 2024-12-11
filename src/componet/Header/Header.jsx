import  logo  from '../../assets/Logo.svg';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import './Header.css'
const Header = () => {

 const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);

  return (
    <div className='header'>
      <div className='logo-nav'>
        <div className='logo-container'>
          <img src={logo} alt='' />
        </div>
      </div>
      <ul className={click ? 'nav-options active' : 'nav-options'}>
        <li className='option' onClick={closeMobileMenu}>
          <a href='#'>Products</a>
        </li>
        <li className='option' onClick={closeMobileMenu}>
          <a href='#'>Home</a>
        </li>
        <li className='option' onClick={closeMobileMenu}>
          <a href='#'>Shop</a>
        </li>
        <li className='option mobile-option' onClick={closeMobileMenu}>
          <a href='#'>Pages</a>
        </li>
        <li className='option' onClick={closeMobileMenu}>
          <a href='#'>Integrations</a>
        </li>
        <li className='option mobile-option' onClick={closeMobileMenu}>
          <a href='#'>Developers</a>
        </li>
        <li className='option mobile-option' onClick={closeMobileMenu}>
          <button>sign-up</button>
        </li>
      </ul>
      <ul className='signin-up'>
        <li className='sign-in' onClick={closeMobileMenu}>
          <a href='#'>login</a>
        </li>
        <li onClick={closeMobileMenu}>
          <button>Start for free</button>
        </li>
      </ul>
      <div className='mobile-menu' onClick={handleClick}>
        {click ? <IoClose /> : <FaBars />}
      </div>
    </div>
  );
}

export default Header