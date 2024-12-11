import './Progress.css'
import projectImg from '../../assets/projectImage.svg';
import profileImg from '../../assets/ProfileImage.svg';

const Progress = () => {
  return (
    <section className='progress-wrapper'>
      <div className='progress-header'>
        <h2>Your Archive of progress</h2>
      </div>
      <main className='progress-main'>
        <div className='card'>
          <span>Projects</span>
          <p>Organize, follow, and archive.</p>
          <img src={projectImg} alt='' />
        </div>
        <div className='card'>
          <span>Member profiles</span>
          <p>Automatic portfolios of your work.</p>
          <img src={profileImg} alt='' />
        </div>
      </main>
    </section>
  );
}

export default Progress