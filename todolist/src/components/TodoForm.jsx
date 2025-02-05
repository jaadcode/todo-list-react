import { useState } from "react";

const TodoForm = ({exportInput}) => {
  const [input, setInput] = useState("");

  // FONCTION TA3 LES FOUS QUI STOCK L'INPUT
  const inputChange = (event) => {
    const inputStock = event.target.value;
    setInput(inputStock);
    console.log(input)
  }

  // BOUTON QUI ENVOIE
  const buttonSender = () => {
    exportInput(input);
    setInput("");
  }

  return (
    <>
    
      <input onChange={inputChange} type="text" value={input}/>
      <button onClick={buttonSender} >MIAM</button>

    </>
  )
}

export default TodoForm;