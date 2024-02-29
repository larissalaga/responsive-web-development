import { useState } from "react";

const ExampleComponent: React.FC = () => {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setText(event.target.value);
        
    }
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) =>{
       
        setText2(event.target.value);
    }
    
    return(
        <>
        <div>
            <b>Texto: </b>
            <input type="text" onChange={handleChange}/> {/*o onBlur modifica o conteudo somente quando sai da caixa de texto o onChande muda a todo momento o que foi modificado na caixa de texto*/}
            <p>Texto digitado: {text} </p>
            <input type="text" onBlur={handleChange2}/>
            <p>Texto digitado: {text2} </p>
        </div>

        </>
    )
}
export default ExampleComponent