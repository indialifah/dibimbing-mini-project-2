import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='wrapper'>
        <div className='container'>
            <h1>Login</h1>
            <div className='form-container'>
                
                <p>Username</p>
                <input type="text" placeholder='username'/>
                
                <p>Password</p>
                <input type="text" placeholder='password'/>
                
                <button>Login</button>
            </div>
            <Link to='/register'>create an account</Link>
        </div>
    </div>
  )
}

export default Login