import React,{useState} from "react";
import logo from '../../images/logo.jpg'

function Header() {
  const [toggle,setToggle] = useState(false);

  const handleClick =()=>{
    setToggle(!toggle)
  }

  return (
    <nav>
      <div className="container">
          <div className="logo">
            <a href="/"><img src={logo}/></a>
          </div>
        <div className="flex-1">
          <ul className={toggle ? 'nav-menu active':'nav-menu'}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/list">Featured Listing</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/rent">Rent</a>
            </li>
            <li>
              <a href="/sale">Sale</a>
            </li>
          </ul>
          <ul className="login-cat">
            <li>
              <a href="/register">
                <i className="fa fa-user-plus" aria-hidden="true"></i> Register
              </a>
            </li>
            <li>
              <a href="/login" className="login">
                <i className="fa fa-sign-in" aria-hidden="true"></i> Login
              </a>
            </li>
          </ul>
        </div>
        <button className="toggle" onClick={handleClick} >
          <i className={toggle ? 'fa fa-times' :'fa fa-bars'}></i>
        </button>
      </div>
    </nav>
  );
}

export default Header;
