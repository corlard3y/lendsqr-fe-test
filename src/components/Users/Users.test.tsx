import { render, screen } from "@testing-library/react";
import Users from "./Users";
import * as getUsersHook from "../../queries/hooks/getUsers";
import "@testing-library/jest-dom";

const mockUsers = [
  {
    id: 1,
    organization: "TestOrg",
    username: "testuser",
    email: "test@example.com",
    phoneNumber: "1234567890",
    dateJoined: "2023-01-01",
    status: "active",
  },
];

// Mock the entire hook with simplified return values
jest.mock("../../queries/hooks/getUsers", () => ({
  GetUsers: jest.fn(),
}));

describe("Users component", () => {
  const mockGetUsers = getUsersHook.GetUsers as jest.MockedFunction<typeof getUsersHook.GetUsers>;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders users table (positive scenario)", () => {
    mockGetUsers.mockReturnValue({
      data: mockUsers,
      isLoading: false,
      isError: false,
      error: null,
      refetch: jest.fn(),
    } as any);
    
    render(<Users />);
    expect(screen.getByRole("heading", { level: 2, name: /^users$/i })).toBeInTheDocument();
    expect(screen.getByText(/testuser/i)).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
  });

  it("shows error message on fetch failure (negative scenario)", () => {
    mockGetUsers.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      error: new Error("Failed to fetch"),
      refetch: jest.fn(),
    } as any);
    
    render(<Users />);
    expect(screen.getByText(/error loading users/i)).toBeInTheDocument();
  });
});
