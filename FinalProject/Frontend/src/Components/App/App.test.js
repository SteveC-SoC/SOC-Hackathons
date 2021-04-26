import React from "react"
import { render } from "@testing-library/react";
import Navbar from "./index";


test("Navbar renders on the page", () => {
    const { getByTestId } = render(<Navbar />);
    const actual = getByTestId("nav");
    expect(actual).toBeInTheDocument();
})