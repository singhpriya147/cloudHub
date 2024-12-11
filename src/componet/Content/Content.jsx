
import './Content.css';
import BigImg from '../../assets/BigImg.svg';
const Content = () => {
  return (
    <div className='dashboard'>
      <header className='dashboard-header'>
        <h1>Keep every one in the loop</h1>
        <p>
          All good things start with a homepage. Get inspired without breaking
          your wallet.
        </p>
        <button className='start-button'>Start for free</button>
      </header>

      <main className='dashboard-main'>
        <div>
          <img src={BigImg} alt='' />
        </div>
      </main>
    </div>
  );
};

export default Content;
