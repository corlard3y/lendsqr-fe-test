import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import MainLayout from './structure/MainLayout'
import UserDetails from './pages/UserDetails'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route element={<MainLayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user-details/:id' element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
