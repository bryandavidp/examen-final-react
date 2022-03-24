import "./App.css";
import { useState } from "react";
import List from "./components/Listado";
import Form from "./components/Formulario";

function App() {
  const [list, setList] = useState(null);

  const api = async () => {
    const api = await fetch("http://localhost:8080/api/tutorials");
    const data = await api.json();
    setList(data);
  };

  const [semaforo, setSemaforo] = useState(false);

  const published = async () => {
    if (semaforo) {
      api();
      setSemaforo(false);
    } else {
      const api = await fetch("http://localhost:8080/api/tutorials/published");
      const data = await api.json();
      setList(data);
      setSemaforo(true);
    }
  };

  function home() {
    setList(null);
  }

  return (
    <div className="App">
      <header className="header">
        <nav class="botones__home">
          <ul>
            <li onClick={home} class="boton__inicio">
              Inicio
            </li>
            <li onClick={api} class="boton__listar">
              Mostrar tutoriales
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {list ? (
          <>
            <span class="publicados" onClick={published}>
              {semaforo ? (
                <>Tutoriales publicados</>
              ) : (
                <>Todos los tutoriales</>
              )}
            </span>
            <List list={list} />
          </>
        ) : (
          <>
            <Form />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
