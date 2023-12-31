import React, { useEffect, useRef, useContext } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
import { AuthContextt } from '../../context/AuthContext'

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },

]
const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContextt)

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header className='header sticky__header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper d-flex align-items-center justify-content-between'>
            {/* {LOGO} START*/}
            <div className='logo'>
              <img src={logo} alt=''></img>
            </div>
            {/* {LOGO} END */}

            {/* {MENU} START */}
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav__links.map((item, key) => {
                    return (
                      <li className='nav__item' key={key}>
                        <NavLink
                          to={item.path}
                          className={navClass => navClass.isActive ? 'active__link' : ''}
                        >{item.display}</NavLink>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            {/* {MENU} END */}
            <div className='nav_right d-flex align-items-center gap-4'>
              <div className='nav_btns d-flex align-items-center gap-4'>
                {
                  user ? <>
                    <h5 className='username text-capitalize'><i class="ri-user-line"></i>{user.username}</h5>
                    <Button className='btn btn-warning' onClick={logout}>Logout</Button>

                  </> : <>
                    <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                    <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>


                  </>
                }
              </div>
              <span className='mobile__menu' onClick={toggleMenu}>
                <i className='ri-menu-line'></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header