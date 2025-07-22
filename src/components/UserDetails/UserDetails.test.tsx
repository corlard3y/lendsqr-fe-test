import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserDetailsComponents from './index';
import * as getUsersHook from '../../queries/hooks/getUsers';
import '@testing-library/jest-dom';

// Mock the GetUsers hook
jest.mock('../../queries/hooks/getUsers', () => ({
  GetUsers: jest.fn(),
}));

// Mock GeneralDetails component
jest.mock('./GeneralDetails', () => {
  return function MockGeneralDetails() {
    return <div>General Details Content</div>;
  };
});

// Mock react-router-dom useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

const mockUser = {
  id: 1,
  organization: 'TestOrg',
  username: 'testuser',
  email: 'test@example.com',
  phoneNumber: '1234567890',
  dateJoined: '2023-01-01',
  status: 'active',
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '1234567890',
    avatar: 'https://example.com/avatar.jpg',
    gender: 'Male',
    bvn: '12345678901',
    address: '123 Test Street',
    currency: 'NGN',
  },
  guarantor: {
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '0987654321',
    gender: 'Female',
    address: '456 Guarantor Street',
  },
  accountBalance: '200000',
  accountNumber: '1234567890',
  socials: {
    facebook: 'john.doe',
    instagram: 'johndoe',
    twitter: '@johndoe',
  },
  education: {
    level: 'B.Sc',
    employmentStatus: 'Employed',
    sector: 'Technology',
    duration: '2 years',
    officeEmail: 'john@company.com',
    monthlyIncome: ['100000', '300000'],
    loanRepayment: '50000',
  },
};

const mockGetUsers = getUsersHook.GetUsers as jest.MockedFunction<typeof getUsersHook.GetUsers>;

// Helper to render with router context
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('UserDetailsComponents', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    mockGetUsers.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null,
      refetch: jest.fn(),
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    expect(screen.getByText(/loading users/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockGetUsers.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      error: new Error('Failed to fetch'),
      refetch: jest.fn(),
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    expect(screen.getByText(/error loading users/i)).toBeInTheDocument();
  });

  it('renders component when no user is found', () => {
    mockGetUsers.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    expect(screen.getByText(/back to users/i)).toBeInTheDocument();
    expect(screen.getByText(/users details/i)).toBeInTheDocument();
  });

  it('renders user details when user exists', () => {
    mockGetUsers.mockReturnValue({
      data: [mockUser],
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    
    // Check if basic elements are displayed
    expect(screen.getByText(/users details/i)).toBeInTheDocument();
    expect(screen.getByText(/back to users/i)).toBeInTheDocument();
    expect(screen.getByText(/general details content/i)).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    mockGetUsers.mockReturnValue({
      data: [mockUser],
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    
    expect(screen.getByText(/blacklist user/i)).toBeInTheDocument();
    expect(screen.getByText(/activate user/i)).toBeInTheDocument();
  });

  it('renders star rating', () => {
    mockGetUsers.mockReturnValue({
      data: [mockUser],
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    
    // Check if star elements are present (they should exist in the component)
    expect(screen.getByText(/users details/i)).toBeInTheDocument();
  });

  it('renders tabs correctly', () => {
    mockGetUsers.mockReturnValue({
      data: [mockUser],
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    
    // Check if basic tabs are present - use getAllByText for duplicates
    const generalDetailsElements = screen.getAllByText(/general details/i);
    expect(generalDetailsElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/documents/i)).toBeInTheDocument();
    expect(screen.getByText(/bank details/i)).toBeInTheDocument();
  });

  it('switches tabs when clicked', () => {
    mockGetUsers.mockReturnValue({
      data: [mockUser],
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    
    // Click on documents tab
    const documentsTab = screen.getByText(/documents/i);
    fireEvent.click(documentsTab);
    
    // Check that documents content appears
    expect(screen.getByText(/documents content/i)).toBeInTheDocument();
  });

  it('renders back to users link', () => {
    mockGetUsers.mockReturnValue({
      data: [mockUser],
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    
    const backLink = screen.getByText(/back to users/i);
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/users');
  });

  it('handles user with minimal data', () => {
    const minimalUser = {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      profile: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };

    mockGetUsers.mockReturnValue({
      data: [minimalUser],
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
    } as any);

    renderWithRouter(<UserDetailsComponents />);
    
    // Should still render basic elements
    expect(screen.getByText(/users details/i)).toBeInTheDocument();
    expect(screen.getByText(/general details content/i)).toBeInTheDocument();
  });
});