
import './FeedBack.css'
import person1 from '../../assets/persons/person01.png';
import person2 from '../../assets/persons/person2.png';
import person3 from '../../assets/persons/person3.png';
import atrate from '../../assets/atrate.svg'
import comment from '../../assets/comment.svg'
import poll from '../../assets/poll.svg'
const FeedBack = () => {
  return (
    <div className='feedback-card'>
      <div className='feedback-wrapper'>
        <div className='feedback-header'>
          <span>Best time here</span>
          <h1>Better feedback at the right time.</h1>
        </div>

        <div className='post'>
          <div className='post-info'>
            <div className='post-info-top'>
              <div className='post-name'>Cloudhub</div>
              <div className='post-time'>2m ago in Brand</div>
            </div>
            <div>
              <button>view post</button>
            </div>
          </div>

          <div className='post-feedback'>
            <p>3 people are looking for feedback this week</p>
            <div className='stacked-img'>
              <img src={person1} alt='' style={{ borderRadius: '100%' }} />
              <img src={person2} alt='' style={{ borderRadius: '100%' }} />
              <img src={person3} alt='' style={{ borderRadius: '100%' }} />
            </div>
          </div>
        </div>

        <div className='action-buttons'>
          <div className='action-button'>
            
            <img src={atrate} alt='' />
            <span>Mentions</span>
            <p>Mention anyone on your team to include them in a post.</p>
          </div>
          <div className='action-button'>
            <img src={poll} alt='' />
            <span>Polls</span>
            <p>Get a quick gut check from the team on design options.</p>
          </div>
          <div className='action-button'>
            <img src={comment} alt='' />
            <span>Resolve comments</span>
            <p>Mark comments as resolved to keep the conversation focused.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
