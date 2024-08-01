import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (a) => {
    setUsername(a.target.value)
  }
  const handleChangePassword = (a) => {
    setPassword(a.target.value)
  }
  const handleRegister = () => {
    try {
      // disini logic buat simpan data
      console.log('username: '+ username + ' password: '+ password)
    }
    catch (err) {
      console.log(err.response)
    }
  }

  return (
    <div className='wrapper'>
        <div className='container'>
            <h1>Register</h1>
            <div className='form-container'>
                
                <p>Username</p>
                <input onChange={handleChangeUsername} type="text" placeholder='username'/>
                
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