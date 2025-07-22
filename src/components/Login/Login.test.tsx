import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginComponent from "./Login";
import "@testing-library/jest-dom";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe("LoginComponent", () => {
  beforeEach(() => {
    (sessionStorage.setItem as jest.Mock).mockClear();
    (sessionStorage.getItem as jest.Mock).mockClear();
  });

  it("shows validation errors when fields are empty", async () => {
    renderWithRouter(<LoginComponent />);
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));
    const errorMessages = await screen.findAllByText(/required/i);
    expect(errorMessages).toHaveLength(2);
  });

  it("logs in successfully with valid credentials", async () => {
    renderWithRouter(<LoginComponent />);
    
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));
    
    await waitFor(() => {
      expect(sessionStorage.setItem).toHaveBeenCalledWith("isAuthenticated", "true");
    });
  });
});
