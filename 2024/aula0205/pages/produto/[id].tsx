import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produto = () => {
    const router = useRouter();
    const { id } = router.query;
    const[produto,setProduto]=useState({
        titulo : "",
        preco : "",
        quantidade : ""

    })
    const [error,setError] = useState("");

    useEffect(() =>{
        fetch(`http://localhost:8080/appRWD/rest/produto/${id}`)
        .then((resp) => {
            if(!resp){
                throw new Error("Erro ao buscar produto!")
            }
            return resp.json();
        })
        .then((data) => {
            setProduto(data);
        })
        .catch((erro) =>{
            setError("Erro ao buscar produto")

        })
    })

    return(
        <>
            <b>Produto: </b>{produto.titulo}<br/>
            <b>Preço: </b>{produto.preco}<br/>
            <b>Quantidade: </b>{produto.quantidade}<br/>
            <Link href="/">Voltar</Link>

        </>
    )
}
export default Produto;