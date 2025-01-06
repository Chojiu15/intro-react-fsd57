import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'



function App() {

  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const URL = import.meta.env.VITE_URL
  console.log(URL)


  const fetchUsers = async () => {
    try {
      const response = await axios.get(URL)
      setUsers(response.data)
    }
    catch (err) {
      setError(err.message)
    }
    finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <p>Loading....</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <div>
        <h1>Hello world</h1>
        {users && !loading && users.map(user => {
          return (
            <div key={user.id}>
              <h3>Hello my name is {user.name}</h3>
              <p>Email : {user.email}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
