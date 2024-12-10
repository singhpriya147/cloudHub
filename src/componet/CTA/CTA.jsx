
import './CTA.css';
import logo from '../../assets/orangeLogo.svg';
const CTA = () => {
  return (
    <div className='main-section'>
      <div className='icon-container'>
        <div className='icon'>
         <img src={logo} alt="" />
        </div>
      </div>
      <h1 className='title'>Increase your team’s visibility and alignment</h1>
      <p className='subtitle'>Start for free, flexible for all teams.</p>
      <div className='button-container'>
       <span>Request a demo</span>
        <button className='btn btn-primary'>Start for free</button>
      </div>
    </div>
  );
};

export default CTA;
