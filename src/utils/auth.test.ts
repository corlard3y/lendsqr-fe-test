import { login, logout, isAuthenticated } from './auth';

describe('auth utilities', () => {
  it('sets login state', () => {
    login('test@example.com');
    expect(localStorage.setItem).toHaveBeenCalledWith('isLoggedIn', 'true');
    expect(localStorage.setItem).toHaveBeenCalledWith('userEmail', 'test@example.com');
  });

  it('clears login state', () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('isLoggedIn');
    expect(localStorage.removeItem).toHaveBeenCalledWith('userEmail');
  });

  it('checks authentication status', () => {
    (localStorage.getItem as jest.Mock).mockReturnValue('true');
    expect(isAuthenticated()).toBe(true);

    (localStorage.getItem as jest.Mock).mockReturnValue(null);
    expect(isAuthenticated()).toBe(false);
  });
});