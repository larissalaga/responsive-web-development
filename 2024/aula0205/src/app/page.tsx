"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/appRWD/rest/produto")
    .then((resp) => resp.json())
    .then((resp) => {
      setProdutos(resp);
    })
    .catch((error) => {
      console.log(error)
    })
  },[])
  
  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {
          produtos.map((produto) =>(
            <li key={ produto.codigo }>
              <Link href="/produto/[id]" as={`/produto/${produto.codigo}`}>{ produto.titulo }</Link>
            </li>
          ))
        }
      </ul>


    </>
  );
}
