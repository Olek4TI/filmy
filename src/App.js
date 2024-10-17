import React, { useState } from 'react' ;
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'; 

function App() {
  // Stany przechowujące dane formularza
  const [tytul, setTytul] = useState("")
  const [rodzaj, setRodzaj] = useState("")

  // Funkcja obsługująca przycisk "Dodaj"
  const handleSubmit = (e) => {
    e.preventDefault(); //Zapobiega odświeżeniu strony po kliknięciu

    //Wyświetlanie danych formularza w konsoli
    console.log(`Tytuł: ${tytul}, Rodzaj: ${rodzaj}`);
  };

  return (
    <div className="container"> style={{ padding: "20px" }}
      <h1>Dodaj film</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tytul">Tytuł filmu:</label>
        <input type="text" className="form-control" id="film" />
        <select name="Rodzaj">
          <option value="1"> Komedia</option>
          <option value="2"> Obyczajowy </option>
          <option value="3"> Sensacyjny </option>
          <option value="4"> Horror </option>
         </select>
         <button type="submit">Dodaj</button>
      </form>
    </div>
    )

  }
export default App;
