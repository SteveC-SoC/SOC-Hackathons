import Form from "react-bootstrap/Form";
import React from "react";
import cn from "classnames";
import css from "./SearchComponent.module.css";

function SearchBar({
  searchCountry,
  setSearchCountry,
  placeholderText,
  variant,
}) {
  //If we want to have just one searchbar component for countries and UK we need to change the props???

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group controlId="formGroupEmail">
        <Form.Control
          type="text"
          //this turns off auto complete
          autoComplete="off"
          placeholder={placeholderText}
          onChange={(e) => setSearchCountry(e.target.value)}
          className={cn(css.input, css[variant])}
          data-testid="searchbar"
        />
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
