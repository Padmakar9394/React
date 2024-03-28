import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should render header component with login button", () => { 
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
});

test("Should has cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //we can use regex to find whether component has cart or not
    const cart = screen.getByText(/Cart/);
    
    expect(cart).toBeInTheDocument();
});

it("Should change login button to logout on click", () => { 
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //we can pass extra parameters if we have more than one elements with same role
    const loginButton = screen.getByRole("button", { name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});

