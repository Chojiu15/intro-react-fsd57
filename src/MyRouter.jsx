import {Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import NavBar from './components/NabBar.jsx'
import User from './pages/User.jsx'
import Weather from './pages/Weather.jsx'
import Register from './pages/Register.jsx'

const MyRouter = () => {
    return(
        <>
        <NavBar />
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/user/:id' element={<User />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/register' element={<Register />} /> 
            <Route path='*' element={<h1>404 page not found</h1>} />
        </Routes>
        </>
    )
}


export default MyRouter 