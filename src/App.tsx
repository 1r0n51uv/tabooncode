import React, {useState} from 'react';
import './App.css';
import elements from './words.json';


function App() {
  const [image, setImage] = useState<string>("");
  return (
    <div className="App">
        <img src={image} alt="" />

        <div>
            <button onClick={() => {
            const random = Math.floor(Math.random() * elements.elements.length - 1);
            const path = process.env.PUBLIC_URL + "images/" + elements.elements[random]
            setImage(path)
        }}>Genera parola
            </button>
        </div>


    </div>

  );
}

export default App;
