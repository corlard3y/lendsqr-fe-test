import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import MainLayout from './structure/MainLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route element={<MainLayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
