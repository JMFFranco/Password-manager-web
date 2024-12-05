import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [passwordList, setPasswordList] = useState([]);
  const [clickedIndexes, setClickedIndexes] = useState([]);

  const handleClick = (index, passwordDetails) => { 
    if (!clickedIndexes.includes(index)) {
       decryptPassword(passwordDetails); 
       setClickedIndexes([...clickedIndexes, index]);
      }
    };

  useEffect(() => {
    Axios.get("http://localhost:3000/showPasswords").then((response) => {
      setPasswordList(response.data);
    });
  }, []);

  const addPassword = () => {
    if(password !== "" && title !== "") {
      Axios.post("http://localhost:3000/addPassword", {
        password: password,
        title: title,
      });
      window.location.reload();
    }
  };

  const decryptPassword = (encryption) => {
    Axios.post("http://localhost:3000/decryptPassword", {
      password: encryption.password,
      iv: encryption.iv,
    }).then((response) => {
      setPasswordList(
        passwordList.map((val) => {
          return val.id === encryption.id
            ? {
                id: val.id,
                password: response.data,
                title: val.title,
                iv: val.iv,
              }
            : val;
        })
      );
    });
  };

  return (
    <div className="App">
    {/* HEADER */}
    <header className="Passwords">
    <div className="header-div">
      <h3>Gestor de contraseñas</h3>
    </div>
    </header>
    {/* Formulario de contraseñas */}
      <div className="AddingPassword">
      <label>Pagina</label>
        <input
          type="text"
          placeholder="Ej. Facebook"
          defaultValue={""}
          onChange={(event) => setTitle(event.target.value)}
        />
      <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ej. password123"
          defaultValue={""}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={addPassword} href="">Añadir contraseña</button>
      </div>
      {/* Listado de contraseñas */}
      <div className="Passwords"> 
        {passwordList.map((val, key) => { 
          const isClicked = clickedIndexes.includes(key); 
          return ( 
            <div className="data-grid" key={key}> 
              <div className="title"> 
                <h3>{val.title}</h3> 
              </div> 
            <div className={`password ${isClicked ? 'disabled' : ''}`} 
              onClick={() => handleClick(key, { 
                password: val.password, 
                iv: val.iv, 
                id: val.id, 
              })} 
            > 
            <h3> {val.password} </h3> 
          </div> 
        </div> 
        ); })} 
      </div>
    </div>
  );
}

export default App;
