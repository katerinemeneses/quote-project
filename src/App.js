
import './App.css'; 
import listaFraces from "./quotes.json"
import { useState } from 'react';
import QuoteBox from './QuoteBox/QuoteBox';
import color from "./color.json"


function App() {
  const [fraces, setFraces] = useState(0) 
  const [colorIndex, setColorIndex] = useState(0)
  function fracesAleatoria(){
    setFraces(Math.floor(Math.random() * listaFraces.length))
    setColorIndex(Math.floor(Math.random() * color.length))
  }
   document.body.style = `background: ${color[colorIndex]}`;
  return (
   
    <div class="container"> 
     <div className="App" style={{color: color[colorIndex]}}>
      <QuoteBox textoFrase={listaFraces[fraces].quote} autorFrase={listaFraces[fraces].author} fracesAleatoria={fracesAleatoria} />
    </div>
    </div>

    
  );
}

export default App;
