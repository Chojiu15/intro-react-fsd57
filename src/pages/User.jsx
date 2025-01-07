import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const User = () => {
    let { id } = useParams()
    const [user, setUser] = useState(null)


    const fetchUser = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(response.data)
        }
        catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <>
            {user && (
                <h1>Hello world user : {user.username}</h1>
            )}
        </>
    )
}

// ec5f933788ec2e550fc16821c27da3f6
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ec5f933788ec2e550fc16821c27da3f6
// https://api.openweathermap.org/data/2.5/weather?q=paris&appid=ec5f933788ec2e550fc16821c27da3f6

export default User