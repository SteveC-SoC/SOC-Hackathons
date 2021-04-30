import React from "react";
import { Button } from "blob-components";

function SubmitButton({ name, handleClick }) {
  return <Button onClick={handleClick}>{name}</Button>;
}

export default SubmitButton;
