import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserDetailsComponents from './index';
import * as getUsersHook from '../../queries/hooks/getUsers';
import '@testing-library/jest-dom';

jest.mock('../../queries/hooks/getUsers', () => ({
  GetUsers: jest.fn(),
}));

jest.mock('./GeneralDetails', () => {
  return function MockGeneralDetails() {
    return <div>General Details Content</div>;
  };
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

const mockUser = {
  id: 1,
  username: 'testuser',
  email: 'test@example.com',
  accountBalance: '200000',
  accountNumber: '1234567890',
};

const mockGetUsers = getUsersHook.GetUsers as jest.MockedFunction<typeof getUsersHook.GetUsers>;

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('UserDetailsComponents', () => {
  it('renders loading state', () => {
    mockGetUsers.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    expect(screen.getByText(/loading users/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockGetUsers.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    expect(screen.getByText(/error loading users/i)).toBeInTheDocument();
  });

  it('renders user details when user exists', () => {
    mockGetUsers.mockReturnValue({
      data: [mockUser],
      isLoading: false,
      isError: false,
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    expect(screen.getByText(/users details/i)).toBeInTheDocument();
    expect(screen.getByText(/back to users/i)).toBeInTheDocument();
    expect(screen.getByText(/general details content/i)).toBeInTheDocument();
  });
});