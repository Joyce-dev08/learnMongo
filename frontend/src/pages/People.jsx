import React from 'react'
import { useEffect, useState} from 'react'

const People = () => {
     const[data, setData] = useState([]);
    useEffect(()=>{
        const getUsers = async() => {
         const res = await fetch('http://localhost:3000/api/users')
         const fetched = await res.json();

            setData(fetched.users)
        }


        getUsers();

    }, [])


  return (
    <div>
     <h1>People</h1>
     {data.map(d => <h3>{d.name} ({d.email})</h3>
     )}
    </div>
  )
}

export default People