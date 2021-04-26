import React from "react";
import { render } from "@testing-library/react";
import Search  from "./index.js";


test.only("Searchbar to render on page", () => {
  const { getByTestId } = render(<Search />);
  const actual = getByTestId("searchbar");
  expect(actual).toBeInTheDocument();
});

