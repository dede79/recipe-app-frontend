import React from "react";
import { render, screen } from "@testing-library/react";
import Signin from "../components/auth/Signin";

describe("Signin", () => {
  it("renders an email and password input", () => {
    render(<Signin />);

    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();
  });
});
