import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (a) => {
    setEmail(a.target.value)
    // console.log(a.target.value)
  }
  const handleChangePassword = (a) => {
    setPassword(a.target.value)
    // console.log(a.target.value)
  }
  const handleLogin = () => {
    
    const payload = {
      email : email,
      password : password
    }

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('access_token', res?.data?.token)
      })
      .catch((err) => {
        console.log(err.response)
        console.log(err?.response?.data?.error)
      })
    
  }

  return (
    <div className='wrapper'>
        <div className='container'>
            <h1>Login</h1>
            <div className='form-container'>
                
                <p>Email</p>
                <input onChange={handleChangeEmail} type="text" placeholder='email'/>
                
                <p>Password</p>
                <input onChange={handleChangePassword} type="text" placeholder='password'/>
                
                <button onClick={handleLogin}>Login</button>
            </div>
            <Link to='/register'>create an account</Link>
        </div>
    </div>
  )
}

export default Login