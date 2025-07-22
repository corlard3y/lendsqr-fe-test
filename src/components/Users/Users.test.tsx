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

jest.mock("../../queries/hooks/getUsers", () => ({
  GetUsers: jest.fn(),
}));

describe("Users component", () => {
  const mockGetUsers = getUsersHook.GetUsers as jest.MockedFunction<typeof getUsersHook.GetUsers>;

  it("renders users table with data", () => {
    mockGetUsers.mockReturnValue({
      data: mockUsers,
      isLoading: false,
      isError: false,
    } as any);
    
    render(<Users />);
    expect(screen.getByRole("heading", { level: 2, name: /^users$/i })).toBeInTheDocument();
    expect(screen.getByText(/testuser/i)).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
  });

  it("shows error message when fetch fails", () => {
    mockGetUsers.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as any);
    
    render(<Users />);
    expect(screen.getByText(/error loading users/i)).toBeInTheDocument();
  });
});
