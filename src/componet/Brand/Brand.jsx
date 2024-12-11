
import './Brand.css'

import logo1 from '../../assets/logos/logo1.svg'
import logo2 from '../../assets/logos/logo2.svg';
import logo3 from '../../assets/logos/logo3.svg';
import logo4 from '../../assets/logos/logo4.svg';
import logo5 from '../../assets/logos/logo5.svg';
import logo6 from '../../assets/logos/logo6.svg';
import logo7 from '../../assets/logos/logo7.svg';

const Brand = () => {
  return (
    <div className='brand-wrapper'>
      <div className='logo-container'>
        <img src={logo1} alt='' />
      </div>
      <div className='logo-container'>
        <img src={logo2} alt='' />
      </div>
      <div className='logo-container'>
        <img src={logo3} alt='' />
      </div>
      <div className='logo-container'>
        <img src={logo4} alt='' />
      </div>
      <div className='logo-container'>
        <img src={logo5} alt='' />
      </div>
      <div className='logo-container'>
        <img src={logo6} alt='' />
      </div>
      <div className='logo-container'>
        <img src={logo7} alt='' />
      </div>
    </div>
  );
}

export default Brand