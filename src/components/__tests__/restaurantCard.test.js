import { render, screen } from "@testing-library/react"
import RestuarntCard from "../RestaurantCard"
import MOCK_DATA from "../../Mock/RestaurantMock.json";
import "@testing-library/jest-dom";


it('Should render restaurant card with props data', () => {
    render(<RestuarntCard details={MOCK_DATA} />);

    const name = screen.getByText("Cafe Goodluck");

    expect(name).toBeInTheDocument();
});