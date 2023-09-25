import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick__links = [
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

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]
const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt='' />
              <p>Lorem dolor sit amet consectet accusantium natus hic dolore quas laudantium provident</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'> <i className='ri-youtube-line'></i></Link>
                </span>
                <span>
                  <Link to='#'> <i className='ri-github-fill'></i></Link>
                </span>
                <span>
                  <Link to='#'> <i className='ri-facebook-circle-line'></i></Link>
                </span>
                <span>
                  <Link to='#'> <i className='ri-instagram-line'></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discovery</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((val, i) => {
                  return (
                    <ListGroupItem key={i} className='ps-0 border-0'>
                      <Link to={val.path}>{val.display}</Link>
                    </ListGroupItem>
                  )
                })
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((val, i) => {
                  return (
                    <ListGroupItem key={i} className='ps-0 border-0'>
                      <Link to={val.path}>{val.display}</Link>
                    </ListGroupItem>
                  )
                })
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Contacts</h5>
            <ListGroup className='footer__quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-map-pin-line'></i></span> Address:
                </h6>
                <p className='mb-0'>Karachi </p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-mail-line'></i></span>
                  Email:
                </h6>
                <p className='mb-0'>rafay@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-phone-line'></i></span>
                  phone:
                </h6>
                <p className='mb-0'>03348712314</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Col lg='12' className='text-center mt-3'>
          <p className='copyright'>Copyright {year} design and develop by Rafay shaikh. All rights reserverd</p>
        </Col>
      </Container>
    </footer>
  )
}

export default Footer