import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const SingleUser = () => {

  const { id } = useParams()
  const [user, setUser] = useState(null)

  const getUser = (id) => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res.data.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    getUser(id)
  }, [id])

  return (
    <div>
      <h1 className='text-3xl font-semibold p-10 bg-sky-700 text-white'>Single User</h1>
      {/* <hr /> */}
      <div className='my-8 flex justify-center content-center'>
        {
          user && (
            <div className='p-8 bg-white bg-opacity-50 shadow-lg rounded-xl'>
              <div className=' flex flex-col gap-y-4 items-center'>
                <img src={user.avatar} alt="avatar" className='w-40 rounded-full'/>
                <h3 className='text-2xl font-bold'>{user.first_name} {user.last_name}</h3>
                <hr className='w-[100%] border-sky-700 border-1'/>
                <div className='grid grid-cols-2'>
                  <div>
                    <p className='text-xl font-medium'>First Name: </p>
                    <p className='text-xl font-medium'>Last Name: </p>
                    <p className='text-xl font-medium'>Email: </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-xl font-semilight'>{user.first_name}</p>
                    <p className='text-xl font-semilight'>{user.last_name}</p>
                    <p className='text-xl font-semilight'>{user.email}</p>
                  </div>
                </div>
              </div>
              <Link to={'/'} className='float-right mt-8 py-2 px-6 bg-sky-500 text-white text-lg rounded-full hover:bg-sky-700'>
                Back
              </Link>
            </div>
          )
        }
      </div>
      
    </div>
  )
}

export default SingleUser