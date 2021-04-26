import React from "react";
import { Modal, Row, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "../../CustomHooks/useFetch"

function RedCountriesModal(props) {

  let data = [1,2,3,4,5]
  const url = process.env.REACT_APP_RED_URL

// import red ist country data from heroku db 
data = useFetch(url, []);
// rows 1-2 are info rows import as p 
console.log(data)
// row 3 is link for more info 
// rows 4 to array.length are red listed countries 
    // split the remaining data into 2 columns 
    // 4 to (array.length/2) + 2 - column one 
    // (array.length/2) + 2 to array.length - column 2 

    while (data === null)
    {
      return <p>some important information is loading here...</p>
    }


    let redCountries1 =  data.slice(4, (data.length/2)+3)
    console.log(redCountries1)
    let redCountries2 =  data.slice((data.length/2)+3)
    console.log(redCountries2)
 
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Countries from which entry to the UK is banned - 'Red List' countries
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p>
            {data[0].content.replace(/&#44;/g, ",")}
          </p>
          <p>
            {data[1].content.replace(/&#44;/g, ",")}
            <a href={data[2].content.replace(/&#44/g, ",")} target="_blank">
              {" "}
click here for more information </a>
          </p>
          <Row>
            <Col xs={6} md={6}>
              <ul>      
      {redCountries1.map(red => (
        <li>{red.content}</li>
      ))}

                
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <ul>
         
      {redCountries2.map(red => (
        <li>{red.content}</li>
      ))}
  
                
              </ul>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <p>
          Last updated: {data[3].content}
        </p>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

}

export default RedCountriesModal;
