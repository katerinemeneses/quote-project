import Button from "./Button"

const QuoteBox = ({textoFrase, autorFrase, fracesAleatoria}) => {
    return (
      <div class="containerComillas">
        <i class="comillas fa-solid fa-quote-left"></i>
        <p>{textoFrase}</p>
        <p>{autorFrase}</p>
        <Button fracesAleatoria={fracesAleatoria}/>
      </div>
    )
  }
  
  export default QuoteBox