import React from "react"
import { render } from "@testing-library/react";
import HotelWidget from "./index.js";



test("Renders the widget", () => {
    const { getByTestId } = render(<HotelWidget />);
    const actual = getByTestId("hotelwidget");
    expect(actual).toBeInTheDocument();
})