
import './FeedBack.css'

const FeedBack = () => {
  return (
    <div className='feedback-card'>
      
      <div className='feedback-header'>
        <h1>Better feedback at the right time.</h1>
      </div>

      
      <div className='post'>
        <div className='post-info'>
          <div className='post-name'>Cloudhub</div>
          <div className='post-time'>2m ago in Brand</div>
        </div>
        <div className='post-feedback'>
          <p>3 people are looking for feedback this week</p>
          <button className='view-post-btn'>View post</button>
        </div>
      </div>

      
      <div className='action-buttons'>
        <div className='action-button'>
          <span>@</span>
          <span>Mentions</span>
        </div>
        <div className='action-button'>
          {/* <span>🗳️</span> */}
          <span>Polls</span>
        </div>
        <div className='action-button'>
          {/* <span>✅</span> */}
          <span>Resolve comments</span>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
