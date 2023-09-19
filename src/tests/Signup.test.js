import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Signup from "../components/auth/Signup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

describe("Signup", () => {
  it("renders an email and password input", () => {
    render(<Signup />);

    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();
  });

  // todo fix this test
  // mockSignup function isn't mocking - data is sent to Firebase instead
  // Modified this test further down to use as a rejection test
  xit("calls the Signup function with an email and password", async () => {
    const mockSignup = jest.fn();
    const email = "test.example@demo.com";
    const password = "testpassword";

    render(<Signup />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: email },
    });

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: password },
    });

    fireEvent.click(screen.getByText("Sign Up"));

    await waitFor(() =>
      expect(mockSignup).toHaveBeenCalledWith(email, password)
    );
  });

  // This test also doesn't work, actually
  // It's unclear to me how testing with Firebase works
  // todo research firebase testing

  it("calls the Signup function with an already taken email and displays the error", async () => {
    jest.mock("firebase/auth", () => ({
      createUserWithEmailAndPassword: jest.fn((auth, email, password) => {
        if (email === "test.example@demo.com") {
          return Promise.reject(
            new Error("Firebase: Error (auth/email-already-in-use)")
          );
        }
        // Mock a successful registration
        return Promise.resolve({});
      }),
    }));

    const email = "test.example@demo.com";
    const password = "testpassword";

    render(<Signup />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: email },
    });

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: password },
    });

    fireEvent.click(screen.getByText("Sign Up"));

    // Wait for the error message to be displayed
    await screen.findByText("Firebase: Error (auth/email-already-in-use)");
  });
});
