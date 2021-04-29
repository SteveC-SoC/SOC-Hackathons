import React from "react";
import {render, fireEvent} from "@testing-library/react";
import JokeViewer from "./";
import {reducer} from "./";

const testProps= {
    h1: "Do you feel lucky punk?... Well do ya?"
};

test("h1 text will render onto the DOM", ()=> {
    const {getByTestId} = render(<JokeViewer {...testProps} />);
    const actual = getByTestId ("title");
    expect(actual).toBeInTheDocument();
});

// test("When clicked, HandleClick return a new joke from API", ()=> {

//     const actual = reducer(null, {type:'DAD-JOKES'});
//     const expected = (null);
//     expect(actual).toEqual(expected);
 
// });


