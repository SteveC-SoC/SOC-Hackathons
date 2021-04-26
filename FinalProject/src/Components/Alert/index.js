import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Alert() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  function reDirect() {
    window.open(
      "https://www.gov.uk/guidance/coronavirus-covid-19-declaration-form-for-international-travel#permitted-reasons-for-international-travel"
    );
  }

  useEffect(() => {}, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you exempt from travel restrictions?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ color: "red" }}>
            Currently it is illegal to travel abroad for holidays.
          </h5>{" "}
          Follow current COVID-19 rules where you live: England, Scotland, Wales
          and Northern Ireland. In England, you must have a permitted reason to
          travel abroad and complete a declaration form. Click to for an
          overview of reasonable excuses for international travel from the UK
          and more infomation about the declaration form.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Yes, I am exempt
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              reDirect();
            }}
          >
            I'm not sure
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Alert;
