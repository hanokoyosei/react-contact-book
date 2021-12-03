import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const EditModal = ({show, handleClose, productToEdit,
     setProductToEdit, updateProduct}) => {
  

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
        <input
       
        type="text"
        placeholder="Model"
        name="model"
        className="col-3 mb-1"
      />
      <input
        
        type="text"
        placeholder="Price"
        name="price"
        className="col-3 mb-1"
      />
      <input
        
        type="text"
        placeholder="Image"
        name="image"
        className="col-3 mb-1"
      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateProduct()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;