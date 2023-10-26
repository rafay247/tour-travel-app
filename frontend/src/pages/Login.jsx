import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Row, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

import { AuthContextt } from '../context/AuthContext'
import BASE_URL from '../utils/config'


const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined

  })
  const { dispatch } = useContext(AuthContextt)
  const navigate = useNavigate()

  const handleClick = async e => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(credentials)
      })
      const result = await res.json()
      console.log('lognin', result);
      if (!res.ok) alert(result.message)
      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
      navigate('/')

    } catch (error) {
      dispatch({ type: 'LOGIN_FAILED', payload: error.message })
      alert(error.message)
    }

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
              <img src={loginImg} alt="" />
            </div>

            <div className='login__form'>
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Login</h2>

              <Form onSubmit={handleClick} className=''>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='password' required id='password' onChange={handleChange} />
                </FormGroup>
                <Button className='btn auth__btn' type='submit'>Login</Button>
              </Form>

              <p>Don't have an account? <Link to='/register'>Create</Link></p>
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login