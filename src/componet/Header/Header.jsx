import { ReactComponent as Logo } from '../../assets/Logo.svg';

const Header = () => {
  return (
    <div>
     <nav>
      <div>
       <div className="logo-container">
       <Logo/>
       </div>
       <ul>
        <li>
           Home
        </li>
       </ul>
      </div>

     </nav>
    </div>
  )
}

export default Header