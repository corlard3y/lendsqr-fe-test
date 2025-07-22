import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import MainLayout from './structure/MainLayout'
import UserDetails from './pages/UserDetails'
import ProtectedRoute from './middlewares/ProtectedRoute'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/user-details/:id' element={<UserDetails />} />
        </Route>

        {/* 404 fallback */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
