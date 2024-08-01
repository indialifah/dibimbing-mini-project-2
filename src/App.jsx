import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ListUser from './pages/ListUser'
import SingleUser from './pages/SingleUser'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/list-user' element={<ListUser />}/>
      <Route path='/user/:id' element={<SingleUser />}/>
    </Routes>
  )
}

export default App
