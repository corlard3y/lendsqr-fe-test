export const login = (email: string) => {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userEmail', email);
};

export const logout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userEmail');
};

export const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};
