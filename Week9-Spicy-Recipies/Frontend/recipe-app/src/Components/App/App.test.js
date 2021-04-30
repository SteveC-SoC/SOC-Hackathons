import { fireEvent, render, screen } from '@testing-library/react';
import React from "react";
import App from './App';

const testProps= {
    handleClick: jest.fn()
};

test("given a prop of a handleClick function, when clicked, Button should call the handleClick function", ()=> {
  const {getByTestID} = render(<App {...testProps}/>);
  const renderedButton = getByTestID('button');
  fireEvent.click(renderedButton);
  expect(testProps.handleClick).toHaveBeenCalled();

});
