import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import closeButton from "react-bootstrap/closeButton";

function Formulario(props) {
  const item = props.item;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function save() {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    fetch("http://localhost:8080/api/tutorials/" + item.id, {
      method: "DELETE",
      headers: headersList,
    }).then(function (data) {
      console.log(data);
      setShow(false);
    });
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        {" "}
        <span class="iconify" data-icon="fa-solid:trash"></span> Eliminar
        tutorial
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header>
          <Modal.Title>Eliminar tutorial</Modal.Title>
          <Button variant="danger" onClick={handleClose} src={closeButton}>
            {" "}
            <span class="iconify" data-icon="fa-solid:times"></span> Cerrar
          </Button>
        </Modal.Header>
        <Modal.Body>¿Está seguro que desea eliminar el tutorial?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={save}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Formulario;
