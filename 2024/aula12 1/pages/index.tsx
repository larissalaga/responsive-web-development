import Link from "next/link";
import { useEffect, useState } from "react";


const ProductPage = () =>{

    const [products,setProducts] = useState([]);

    useEffect(() =>{
        const fetchProducts = async()=>{
            // Chamada da função assíncrona dentro do useEffect, para que a página seja carregada apenas após as informações dos produtos terem sido obtidas.
            try{
                const res = await fetch('/api/products.json');
                // Transforma o JSON em um array de objetos e adiciona a chave 'index' para facilitar o uso do array no JSX
                const data = await res.json();
                setProducts(data);
            } catch(error){
                console.error("Erro ao buscar os produtos", error);
            }
        };
        fetchProducts();
    },[])
    
    return(
        <>
            <h1>Produtos</h1>
            <ul>
            {
                products.map(product =>(
                    <li key={product.id}>
                        <Link href={`/product/${product.id}`}>
                            <span>{ product.name}</span>
                        </Link>
                    </li>
                ))
            }
            </ul>
        </>
    )
}
export default ProductPage;
