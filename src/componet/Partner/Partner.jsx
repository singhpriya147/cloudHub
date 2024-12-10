import './Partner.css'
import img1 from  '../../assets/partners/airbus.png';
import img2 from '../../assets/partners/autoTrader.png';

import img3 from '../../assets/partners/cathy.png';

import img4 from '../../assets/partners/crowdstrike.png';
import img5 from '../../assets/partners/hays.png';
import img6 from '../../assets/partners/liquid.png';




import './Partner.css';

const Partner = () => {
  const companies = [
    { name: 'CrowdStrike', logo: img1 },
    { name: 'Airbus', logo: img2 },
    { name: 'Hays', logo: img3 },
    { name: 'Sentry', logo: img4 },
    { name: 'Medwing', logo: img5 },
    { name: 'Cathay Pacific', logo: img6 },
    { name: 'Liquid Web', logo: img1 },
    { name: 'Cathay Pacific', logo: img5 },
  ];

  return (
    <section className='companies-section'>
      <h2 className='section-title'>Loved By Designers At</h2>
      <div className='brand-container'>
        <div className='companies-grid'>
          {companies.map((company, index) => (
            <div className='company-card' key={index}>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className='company-logo'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
