import React from "react"
import { render } from "@testing-library/react";
import Button from "./index.js";

const testProps = {
    //addToList : 1,
    text: "Press me",
};
test("Button renders with text prop as inner text", () => {
    const { getByTestId } = render(<Button {...testProps} />);
    const actual = getByTestId("button");
    expect(actual).toBeInTheDocument();
})