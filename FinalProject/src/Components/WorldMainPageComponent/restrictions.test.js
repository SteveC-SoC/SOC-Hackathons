import React from "react"
import { render } from "@testing-library/react";
import TravelRestrictionsDisplay from "../TravelRestrictionsDisplayComponent/index";

// const testProps = {
//     data={
//         "a": 1,
//         "b": 2
//     }
// }

test("Display renders on the page", () => {
    const { getByTestId } = render(<TravelRestrictionsDisplay />);
    const actual = getByTestId("travelrestrictions");
    expect(actual).toBeInTheDocument();
})