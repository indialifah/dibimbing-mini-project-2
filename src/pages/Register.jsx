import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleChangeEmail = (a) => {
    setEmail(a.target.value)
  }
  const handleChangePassword = (a) => {
    setPassword(a.target.value)
  }
  const handleRegister = () => {
    
    const payload = {
      email : email,
      password : password
    }

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('access_token', res?.data?.token)
        setTimeout(() => {
          navigate('/')
        }, 2000)
      })
      .catch((err) => {
        console.log(err.response)
        console.log(err?.response?.data?.error)
      })
  }

  return (
    <div className='wrapper'>
        <div className='container'>
            <h1>Register</h1>
            <div className='form-container'>
                
                <p>Username</p>
                <input onChange={handleChangeEmail} type="text" placeholder='username'/>
                
                <p>Password</p>
                <input onChange={handleChangePassword} type="text" placeholder='password'/>

                <button onClick={handleRegister}>Register</button>
            </div>
            <Link to='/login'>already have an account</Link>
        </div>
    </div>
  )
}

export default Register