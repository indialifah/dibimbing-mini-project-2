import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
    <div className='wrapper'>
      <div className='container'>
        <h1>Single User</h1>
        <hr />
        {
          user && (
            <>
              <img src={user.avatar} alt="avatar" />
              <h3>First Name: {user.first_name}</h3>
              <h3>Last Name: {user.last_name}</h3>
              <h3>Email: {user.email}</h3>
            </>
          )
        }
        
      </div>
    </div>
  )
}

export default SingleUser