import { login, logout, isAuthenticated } from './auth';

describe('auth utilities', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  describe('login', () => {
    it('sets isLoggedIn to true in localStorage', () => {
      login('test@example.com');
      expect(localStorage.setItem).toHaveBeenCalledWith('isLoggedIn', 'true');
    });

    it('stores user email in localStorage', () => {
      const email = 'test@example.com';
      login(email);
      expect(localStorage.setItem).toHaveBeenCalledWith('userEmail', email);
    });

    it('calls localStorage.setItem twice', () => {
      login('test@example.com');
      expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });
  });

  describe('logout', () => {
    it('removes isLoggedIn from localStorage', () => {
      logout();
      expect(localStorage.removeItem).toHaveBeenCalledWith('isLoggedIn');
    });

    it('removes userEmail from localStorage', () => {
      logout();
      expect(localStorage.removeItem).toHaveBeenCalledWith('userEmail');
    });

    it('calls localStorage.removeItem twice', () => {
      logout();
      expect(localStorage.removeItem).toHaveBeenCalledTimes(2);
    });
  });

  describe('isAuthenticated', () => {
    it('returns true when isLoggedIn is "true"', () => {
      (localStorage.getItem as jest.Mock).mockReturnValue('true');
      expect(isAuthenticated()).toBe(true);
    });

    it('returns false when isLoggedIn is not "true"', () => {
      (localStorage.getItem as jest.Mock).mockReturnValue('false');
      expect(isAuthenticated()).toBe(false);
    });

    it('returns false when isLoggedIn is null', () => {
      (localStorage.getItem as jest.Mock).mockReturnValue(null);
      expect(isAuthenticated()).toBe(false);
    });

    it('returns false when isLoggedIn is undefined', () => {
      (localStorage.getItem as jest.Mock).mockReturnValue(undefined);
      expect(isAuthenticated()).toBe(false);
    });

    it('calls localStorage.getItem with correct key', () => {
      isAuthenticated();
      expect(localStorage.getItem).toHaveBeenCalledWith('isLoggedIn');
    });
  });
});