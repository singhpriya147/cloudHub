import left from '../../assets/Vector-left.svg';
import right from '../../assets/Vector-right.svg';
import middle from '../../assets/svgviewer-output.svg';
import design1 from '../../assets/design-1.png';
import design2 from '../../assets/design-2.png';
import design3 from '../../assets/design-3.png';
import design4 from '../../assets/design-4.png';
import design5 from '../../assets/design-5.png';
import design6 from '../../assets/design-6.png';

import './Hero.css';
const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div id='Herotext'>
        <h1 style={{ marginBottom: '0' }}>
          Create, inspect, and apply synthetic surveillance broadly.
        </h1>
        <p>
          Start with a stunning homepage. Stay motivated without hurting your
          pocket.
        </p>
        <button>start for free</button>
        <p>
          Want to talk or get a live demo? <span>Get in touch →</span>
        </p>
      </div>

      <div className='hero-design'>
        <img src={left} className='left' />

        <div id='middle'>
          <img src={middle} style={{ width: '70%', height: '70%' }} />
        </div>
        <div className='decorative-left'>
          <div id='design1'>
            <img src={design1} style={{ width: '70%', height: '70%' }} />
          </div>

          <div id='design2'>
            <img src={design2} style={{ width: '70%', height: '70%' }} />
          </div>
          <div id='design3'>
            <img src={design3} style={{ width: '70%', height: '70%' }} />
          </div>
        </div>

        <div className='decorative-right'>
          <div id='design4'>
            <img src={design4} style={{ width: '70%', height: '70%' }} />
          </div>
          <div id='design5'>
            <img src={design5} style={{ width: '70%', height: '70%' }} />
          </div>
          <div id='design6'>
            <img src={design6} style={{ width: '70%', height: '70%' }} />
          </div>
        </div>

        <img src={right} className='right' />
      </div>
    </div>
  );
};

export default Hero;
