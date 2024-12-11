import './Testimonial.css'
import reviewIcon1 from '../../assets/reviewIcon1.svg';
import reviewIcon2 from '../../assets/Acme Group.svg';
import person1 from '../../assets/persons/person01.png';
import person2 from '../../assets/persons/person2.png';

const Testimonial = () => {
  return (
    <section className='testimonial'>
      
      <div className='review'>
        <img src={reviewIcon1} alt='' className='brand' />
        <p>
          Cloudhub has emerged as an essential asset for the team at Patreon
          design. Amidst an accelerated expanding organization in which the
          product undergoes rapid changes, Campsite enables us to maintain
          visibility on whats transpiring across various teams — impeccably
          aligning with our pre-existing procedures.
        </p>
        <div>
          <img src={person1} alt='' />
          <div>
            <p>Gabriel Valdivia</p>
            <p>Principal Product Designer, Patreon</p>
          </div>
        </div>
      </div>
      <div className='review'>
        <img src={reviewIcon2} alt='' className='brand' />
        <p>
          Cloudhub has demonstrated exceptional worth in preserving open
          communication among designers regarding their current endeavors, a
          challenge that previously impeded our progress. It continually stands
          as a distinctive platform guiding our dialogue towards imagination and
          consistent review, an element I highly value. Moreover, it has
          accelerated our propensity for early-stage feedback beyond my
          expectations.
        </p>
        <div>
          <img src={person2} alt='' />
          <div>
            <p>Gabriel Valdivia</p>
            <p>Principal Product Designer, Patreon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial