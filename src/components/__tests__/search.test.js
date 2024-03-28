import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../Mock/RestaurantListMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        },
    });
});

it("Should search res list for ice cream text input", async () => {
    await act(async () =>
     render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    )
    );

    const cardsBeforeSearch = screen.getAllByTestId('resCard');
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search"});
    const searchInput  = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "ice cream"} });
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    // console.log(cards);
    expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter top rated restaurants on click", async () => {
    await act(async () => 
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    )
    );

    const restaurantsBeforeFilter = screen.getAllByTestId("resCard");
    expect(restaurantsBeforeFilter.length).toBe(20);

    const topRatedRestaurantsBtn = screen.getByRole("button", { name: "Top Rated Restaurants"});
    fireEvent.click(topRatedRestaurantsBtn);

    const restaurantsAfterFilter = screen.getAllByTestId("resCard");
    expect(restaurantsAfterFilter.length).toBe(17);
})