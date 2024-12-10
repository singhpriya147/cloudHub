import  logo  from '../../assets/Logo.svg';
import './Header.css'
const Header = () => {
  return (
    <div className='header-wrapper'>
      <nav className='nav-bar'>
        <div className='nav-bar-left'>
          <div className='logo-container'>
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>Product</li>
            <li>Home</li>
            <li>Shop</li>
            <li>pages</li>
            <li>Integrations</li>
            <li>Developers</li>
          </ul>
        </div>
        <div className='nav-btn'>
            <button>login</button>
            <button>Start for free</button>
        </div>
      </nav>
    </div>
  );
}

export default Header