import { useState } from "react";

const ExampleComponent: React.FC = () => {
    const [text, setText] = useState("");


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setText(event.target.value);
    }
    return(
        <>
        <div>
            <b>Texto: </b>
            <input type="text" onBlur={handleChange}/> {/*o onBlur modifica o conteudo somente quando sai da caixa de texto o onChande muda a todo momento o que foi modificado na caixa de texto*/}
            <p>Texto digitado: {text} </p>
        </div>

        </>
    )
}
export default ExampleComponent