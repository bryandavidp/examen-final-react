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
    let title = document.querySelector("#titulo").value;
    let description = document.querySelector("#desc").value;
    let publicado = document.querySelector("#publicado").value;
    console.log(title, description, publicado);

    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      title: title,
      description: description,
      published: publicado,
    });

    fetch("http://localhost:8080/api/tutorials/" + item.id, {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    }).then(function (data) {
      console.log(data);
      setShow(false);
    });
  }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        {" "}
        <span class="iconify" data-icon="fa6-solid:pen"></span> Modificar
        tutorial
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header>
          <Modal.Title>Modificar tutorial</Modal.Title>
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
                defaultValue={item.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Descripción</label>
              <input
                type="text"
                className="form-control"
                id="desc"
                defaultValue={item.description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Publicado</label>
              <select className="form-control" id="publicado">
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={save}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Formulario;
