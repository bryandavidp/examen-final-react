import React from "react";
import "../style.css";
import Edit from "./Editar";
import Delete from "./Delete";

export default function List(props) {
  const listado = props.list;

  return (
    <>
      <div className="listado">
        {listado.map((item) => (
          <section key={item.id}>
            <p class="tutorial__titulo">{item.title}</p>
            <p class="tutorial__descripcion">{item.description}</p>
            <div class="botones">
              <Edit item={item} />
              <Delete item={item} />
            </div>
          </section>
        ))}
      </div>

      <div class="contenedor__info">
        <p class="info">
          Si haces click en el titulo de arriba podrás cambiar entre{" "}
          <b>todos los tutoriales</b> y <b>los tutoriales publicados.</b>
        </p>
      </div>
    </>
  );
}
