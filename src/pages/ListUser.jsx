import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListUser = () => {
    
    const [users, setUsers] = useState([])
    const getUsers = () => {
        axios
            .get('https://reqres.in/api/users')
            .then((res) => {
                // console.log(res.data.data)
                setUsers(res.data.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    useEffect(() => {
        getUsers()
    }, [])

    const isLoggedIn = localStorage.getItem('access_token')

    const handleLogout = () => {
        localStorage.clear()
        setTimeout(() => {
            navigate('/login')
        }, 2000)
    }

  return (
    <div>
        <div className=' bg-sky-700 flex justify-between'>
            <h1 className='text-3xl font-semibold p-10 text-white'>List User</h1>
            {isLoggedIn !== null && 
                <button className=' text-white text-lg font-medium m-8 px-4 rounded-full border-white border-2 hover:bg-white hover:text-sky-700' onClick={handleLogout}>Logout</button>
            }
        </div>
        {/* <hr className='py-2 border-sky-700 border-2'/> */}
        <div className='justify-center mx-8 my-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>

            {
                users?.map((user) => {
                    return (
                        <div className='p-10 flex flex-col items-center bg-white bg-opacity-50 shadow-lg rounded-xl' key={user.id}>
                            <img src={user.avatar} alt="" className='w-28 rounded-full'/>
                            <div className='text-center pt-8 flex flex-col'>
                                <h3 className='text-xl font-bold'>{user.first_name} {user.last_name}</h3>
                                <p className='font-semilight'>{user.email}</p>
                                <Link to={`/user/${user.id}`} className='mt-8 p-2 bg-sky-500 text-white text-lg rounded-full hover:bg-sky-700'>View Details</Link>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default ListUser