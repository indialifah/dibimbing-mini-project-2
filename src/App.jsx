import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ListUser from './pages/ListUser'
import SingleUser from './pages/SingleUser'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/' element={<ListUser />}/>
      <Route path='/user/:id' element={<SingleUser />}/>
    </Routes>
  )
}

export default App
