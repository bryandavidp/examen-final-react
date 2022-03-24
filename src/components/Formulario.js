import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import closeButton from "react-bootstrap/closeButton";

function Formulario() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function save() {
    let title = document.querySelector("#titulo").value;
    let description = document.querySelector("#desc").value;

    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      title: title,
      description: description,
    });

    fetch("http://localhost:8080/api/tutorials", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }).then(function (data) {
      console.log(data);
      setShow(false);
    });
  }

  return (
    <>
      <div class="contenedor__boton__agregar">
        <Button
          variant="success"
          className="agregar__tutorial"
          onClick={handleShow}
        >
          Añadir tutorial
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header>
          <Modal.Title>Añadir nuevo tutorial</Modal.Title>
          <Button variant="danger" onClick={handleClose} src={closeButton}>
            {" "}
            <span class="iconify" data-icon="fa-solid:times"></span> Cerrar
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                aria-describedby="emailHelp"
                placeholder="Título"
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Descripción</label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Descripción"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={save}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Formulario;
