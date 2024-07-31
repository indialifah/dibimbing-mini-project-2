import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

  return (
    <div>
        <h1>List User</h1>
        <hr />
        <div className='card-container'>

            {
                users?.map((user) => {
                    return (
                        <div className='card'>
                            <img src={user.avatar} alt="" />
                            <div className='cardtext'>
                                <h3>{user.first_name} {user.last_name}</h3>
                                <p>{user.email}</p>
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