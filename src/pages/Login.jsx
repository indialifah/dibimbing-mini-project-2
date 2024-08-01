import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (a) => {
    setUsername(a.target.value)
    // console.log(a.target.value)
  }
  const handleChangePassword = (a) => {
    setPassword(a.target.value)
    // console.log(a.target.value)
  }
  const handleLogin = () => {
    try {
      // usn n pass terisi
      // validasi username dan password match
      console.log('username: ' + username + ' password: ' + password)
    }
    catch(err) {
      console.log(err.response)
    }
  }

  return (
    <div className='wrapper'>
        <div className='container'>
            <h1>Login</h1>
            <div className='form-container'>
                
                <p>Username</p>
                <input onChange={handleChangeUsername} type="text" placeholder='username'/>
                
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