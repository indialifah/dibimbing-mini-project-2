import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import image from '../assets/illustration.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const navigate = useNavigate()

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
        setError('')
        toast.success("Login successful! 🎉") 
        setTimeout(() => {
          navigate('/')
        }, 2000)
      })
      .catch((err) => {
        console.log(err.response)
        setError(err?.response?.data?.error)
        toast.error("Login failed! Please try again.")
      })
    
  }

  return (
    <div className="grid place-items-center h-screen">
    <div className='md:w-3/5 mx-auto bg-white bg-opacity-85 shadow-lg rounded-xl'>
      <div className='flex'>
          
          <div className='lg:w-2/5 md:w-1/3 rounded-lg m-2' 
            style={{ 
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover'
          }}></div>
          
          <div className='lg:w-3/5 md:w-2/3 w-full p-8'>
            <h1 className='lg:text-3xl md:text-2xl text-3xl font-bold'>Welcome back! 👋</h1>
            <p className='py-1'>Please log in to your account</p>

              <div className='mt-10'>
                <div className='md:my-2 my-8'>
                  <p>E-mail</p>
                  <input onChange={handleChangeEmail} type="text" placeholder='E-mail' required
                    className='my-2 rounded-xl p-2 w-[100%] focus:outline-none focus:border-sky-600 border-2'/>
                </div>
                <div className='md:my-2 my-8'>
                  <p>Password</p>
                  <input onChange={handleChangePassword} type="text" placeholder='Password' required
                    className="my-2 rounded-xl p-2 w-[100%] focus:outline-none focus:border-sky-600 border-2"/>
                </div>

                {error.length ? <p className='text-red-600 font-medium text-center'>{error}</p> : null}
                
                <div className='flex flex-col'>
                  <button 
                    onClick={handleLogin} 
                    className="w-[100%] my-4 py-3 bg-sky-500 text-white text-lg rounded-xl hover:bg-sky-700"
                  >
                    Login
                  </button>
                  <div className="flex gap-1 justify-center md:text-sm text-xs">
                    <p>Don't have an account?</p>
                    <Link to='/register' className="underline text-sky-500 hover:text-sky-700">Create new</Link>
                  </div>
                </div>

              </div>

          </div>
      </div>
    <ToastContainer className='rounded-xl' autoClose={2000}/>
    </div>
    </div>
  )
}

export default Login