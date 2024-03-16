import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.webp'
import './header.css'
import { useState } from 'react'

function Header() {

    const [menuState, setMenuState] = useState(false);
    const [subMenuState, setSubMenuState] = useState(false);

    const navOuter = document.getElementsByClassName('navbar-nav')

    const menuToggle = () => {
      setMenuState(!menuState);
      for (const navOuterNew of navOuter) {
        navOuterNew.classList.remove('subMenuActive')        
      }
      setSubMenuState(false);
    }

    const subMenuToggle = () => {
      setSubMenuState(!subMenuState);
    }

    const closeSubMenu = () => {      
      for (const navOuterNew1 of navOuter) {
        navOuterNew1.classList.remove('subMenuActive')        
      }
      setSubMenuState(!subMenuState);
    }
    
  
    return (
        <header id="header">        
        <nav className={"navbar navbar-expand-lg" + ` ${menuState ? 'activeNavBar' : ''}`}>
            <div className="container-fluid">
              <Link to='/' className='logo-image'><img src={Logo} alt="Main Logo" /></Link>  
              <button onClick={menuToggle} className="navbar-toggler menuToggler" type="button">
                <span className="toggler-icon"></span>
                <span className="toggler-icon middle-toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>            
              <div className={`mainMenu ${menuState ? 'activeMenu' : ''}`} id="mainMenu">
                <ul className={`navbar-nav ms-auto ${subMenuState ? 'subMenuActive' : ''}`}>
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li className="has-dropdown">
                    <NavLink to='javascript:void(0)' id="navbarDropdown">
                      About <span onClick={subMenuToggle} className='menuListArrow'></span>
                    </NavLink>
                    <ul>
                      <button onClick={closeSubMenu} className='close-btn'>Back</button>
                      <li>
                        <NavLink to='/about'>
                          About the Chamber
                        </NavLink>                        
                      </li>
                      <li>
                        <NavLink to='/chamber-committee'>
                          Chamber Committee
                        </NavLink>                        
                      </li>
                      <li>
                        <NavLink to='/think-mosman-first'>
                          Think Mosman First
                        </NavLink>                        
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to='/member-category'>
                      Members
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/events'>
                      Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/join'>
                      Join
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/news'>
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact'>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div onClick={menuToggle} className={`blank-menu-div ${menuState ? 'activeBlankDiv activeMenu' : ''}`}></div>
    </header>
    )
}

export default Header
