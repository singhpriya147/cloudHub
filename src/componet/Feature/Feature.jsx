import person1 from '../../assets/persons/person01.png';
import person2 from '../../assets/persons/person2.png';
import person3 from '../../assets/persons/person3.png';
import AddIcon from '../../assets/addIcon.svg';
import './Feature.css'; 

const Feature = () => {
  return (
    <div className='container'>
      {/* Share Section */}
      <div className='share-section'>
        <div className='share-section-left'>
          <sapn className='badge'>Share</sapn>
          <h2 className='section-title'>Share anything you’re working on.</h2>
          <p className='description'>
            Campsite has been instrumental in keeping designers aware of each
            other’s work-in-progress in a way that was previously slowing us
            down. It’s also one of the only channels where.
          </p>
          <div className='features'>
            <span className='feature'>✔ Coded</span>
            <span className='feature'>✔ 100% Secure</span>
          </div>
          <a href='#' className='link'>
            See how it works
          </a>
        </div>
        <div className='code-block-container'>
          <div style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
            <div className='code-block'>
              <pre>
                <code>
                  {`no ApiCheck('hello-api-1', {
  name: 'Hello API',
  activated: true,
  request: {
    method: 'GET',
    url: 'https://api.checklyhq.com/public-url',
  assertions: [
    assertionBuilder.statusCode().equals(200)
  ]
});`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className='feedback-section'>
        <div className='feedback-section-left'>
          <sapn className='badge'>Feedback</sapn>
          <h2 className='section-title'>Better feedback at the right time.</h2>
          <p className='description'>
            Campsite has been instrumental in keeping designers aware of each
            other’s work-in-progress in a way that was previously slowing us
            down. It’s also one of the only channels where.
          </p>
          <a href='#' className='link'>
            See how it works
          </a>
        </div>
        <div style={{ backgroundColor: '#FAFAFA',borderRadius:'20px' }}>
          <div className='feedback-list'>
            <div>
              <h4>Looking for Feedback?</h4>
            </div>

            <div className='feedback-item'>
              <img src={person1} alt='' style={{ borderRadius: '100%' }} />
              <span>Buzz Ubermorn</span>
              <span className='status'>Pending</span>
            </div>
            <hr
              style={{
                height: '0.2px',
                backgroundColor: 'grey',
                opacity: '50%',
                borderRadius: '2px',
              }}
            />
            <div className='feedback-item'>
              <img src={person2} alt='' />
              <span>Gabriel Valdivia</span>
              <span className='status'>Done</span>
            </div>
            <hr
              style={{
                height: '0.2px',
                backgroundColor: 'grey',
                opacity: '50%',
                borderRadius: '2px',
              }}
            />
            <div className='feedback-item'>
              <img src={person3} alt='' />
              <span>Jochen Dietz</span>
              <span className='status'>Requested</span>
            </div>
            <hr
              style={{
                height: '0.2px',
                backgroundColor: 'grey',
                opacity: '50%',
                borderRadius: '2px',
              }}
            />
            <div
              style={{
                color: '#FD4E26',
                display: 'flex',
                alignItems: 'center',
                gap:'1rem'
              }}
            >
              {' '}
              <img src={AddIcon} alt='' />
              Add More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
