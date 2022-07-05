import React, { useState, useContext } from "react";
import { Modal, Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';


export default function InfoModal(props) {
    const { orderNumber, setOrderNumber } = useContext(CartContext);

     const [show, setShow] = useState(props.show);
     //const handleClose = () => setShow(false);
     //const handleShow = () => setShow(true);

     function handleClose(){
      setOrderNumber(); //blank order number
      setShow(false);
     }

    return (
    <>
      {/*<Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button> */}

      {/* <Modal show={show} onHide={handleClose} centered> */}
      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>Gracias por tu Compra!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu orden fue generada con el número {orderNumber}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}