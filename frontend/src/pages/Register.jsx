import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined

  })
  const handleClick = e => {
    e.preventDefault()

  }

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  return <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className='login__container d-flex justify-content-between'>

            <div className='login__img'>
              <img src={registerImg} alt="" />
            </div>

            <div className='login__form'>
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Register</h2>

              <Form onSubmit={handleClick} className=''>
                <FormGroup>
                  <input type="username" placeholder='Username' required id='username' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='password' required id='password' onChange={handleChange} />
                </FormGroup>
                <Button className='btn auth__btn' type='submit'>Create Account</Button>
              </Form>

              <p>Already have an account?<Link to='/login'>Login</Link></p>
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Register