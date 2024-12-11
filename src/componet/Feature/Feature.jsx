
import codeImage from '../../assets/codeBlock.svg';
import feedbackImg from '../../assets/FeedBackCard.svg';
import './Feature.css';
import check from '../../assets/Check.svg'; 

const Feature = () => {
  return (
    <div className='container'>
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
            <div className='feature'>
              <div className='check'>
                <img src={check} alt='' />
              </div>
              <div>Coded</div>
            </div>
            <div className='feature'>
              <div className='check'>
                <img src={check} alt='' />
              </div>
              <div>100% Secure</div>
            </div>
          </div>
          <a href='#' className='link'>
            See how it works
          </a>
        </div>
        <div className='code-block-container'>
          <div style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
            <img
              src={codeImage}
              alt=''
              style={{
                borderRadius: '25px',
                height: '100%',
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>

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
        <div style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}>
          <img
            src={feedbackImg}
            alt=''
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
