import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='wrapper'>
        <div className='container'>
            <h1>Register</h1>
            <div className='form-container'>
                
                <p>Username</p>
                <input type="text" placeholder='username'/>
                
                <p>Password</p>
                <input type="text" placeholder='password'/>

                <button>Register</button>
            </div>
            <Link to='/login'>already have an account</Link>
        </div>
    </div>
  )
}

export default Register