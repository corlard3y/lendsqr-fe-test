import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true'

  return isAuthenticated ? children : <Navigate to="/" replace />
}

export default ProtectedRoute
