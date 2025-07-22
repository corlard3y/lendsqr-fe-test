import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginComponent from "./Login";
import "@testing-library/jest-dom";

// Helper to render with router context
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe("LoginComponent", () => {
  beforeEach(() => {
    // Clear sessionStorage before each test
    (sessionStorage.setItem as jest.Mock).mockClear();
    (sessionStorage.getItem as jest.Mock).mockClear();
  });

  it("shows validation errors when fields are empty (negative scenario)", async () => {
    renderWithRouter(<LoginComponent />);
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));
    // Use findAllByText since there are multiple "Required" messages
    const errorMessages = await screen.findAllByText(/required/i);
    expect(errorMessages).toHaveLength(2); // One for email, one for password
    expect(errorMessages[0]).toBeInTheDocument();
  });

  it("logs in successfully with valid credentials (positive scenario)", async () => {
    renderWithRouter(<LoginComponent />);
    
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByRole("button", { name: /log in/i });

    fireEvent.change(emailInput, {
      target: { value: "test@example.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "password123" },
    });
    
    fireEvent.click(loginButton);
    
    // Wait for the form submission to complete and check sessionStorage
    await waitFor(() => {
      expect(sessionStorage.setItem).toHaveBeenCalledWith("isAuthenticated", "true");
    });
  });
});
