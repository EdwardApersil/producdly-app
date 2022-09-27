import {BiMenu} from 'react-icons/bi'
import logo from '../img/logo.svg';


function Navbar() {
  const menu = document.querySelector('.container')
  const handleClick = () => { 
    menu.classList.toggle('active');
    // alert('Hello world')
  }

  return (
    <>
        <div className="navbar">
            <div className="logo">
              <img src={logo} alt="" />
          <div className="icon" onClick={handleClick}>
            <BiMenu/>
              </div>
            </div>
            <div className="container">
                <ul>
                  <a href="/" className='navLinks'>Products</a>
                  <a href="Customer" className='navLinks'>Customer</a>
                  <a href="Pricing" className='navLinks'>Pricing</a>
                  <a href="Resources" className='navLinks'>Resources</a>
                </ul>
              <div className='buttons'>
                <button type="login" >Sign in</button>
                <button type="signUp" >Sign up</button>
              </div>
            </div>
            
        </div>
    </>
  )
}

export default Navbar;