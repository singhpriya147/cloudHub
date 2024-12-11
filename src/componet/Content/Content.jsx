
import './Content.css';

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
        <aside className='sidebar'>
          <ul>
            <li className='active'>Home</li>
            <li>My Tasks</li>
            <li>My Plan</li>
            <li>Inbox</li>
            <li>People</li>
            <li>Reporting</li>
          </ul>
        </aside>

        <section className='project-section'>
          <div className='search-bar'>
            <input type='text' placeholder='Search' />
          </div>
          <div className='projects'>
            <div className='project-card'>
              <h3>Web Design</h3>
              <p>Product Design</p>
              <p className='status'>
                <span className='in-progress'>In progress: 43</span>
                <span className='completed'>Completed: 16</span>
              </p>
            </div>
            <div className='project-card'>
              <h3>App Development</h3>
              <p>Development</p>
              <p className='status'>
                <span className='in-progress'>In progress: 12</span>
                <span className='completed'>Completed: 18</span>
              </p>
            </div>
            <div className='project-card'>
              <h3>Branding</h3>
              <p>Product</p>
              <p className='status'>
                <span className='in-progress'>In progress: 22</span>
                <span className='completed'>Completed: 28</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Content;
