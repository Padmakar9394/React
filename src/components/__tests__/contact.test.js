import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact-us heading", () => {
    //Rendered on JSDom
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should load contact-us button", () => {
    //Rendered on JSDom
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});

test("Should load contact-us input-name", () => {
    //Rendered on JSDom
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
});