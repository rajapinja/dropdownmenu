import Navbar from './Navbar';
import logo from './images/Logo_laraid.jpeg';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <span><img src={logo} alt="Logo" width="60" heigh="40"/></span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
