import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () =>{

  const router = useRouter();
  const { id } = router.query;
  const [product,setProduct] = useState(null);

  useEffect(() =>{
    const fetchData = async() =>{
      try{
        const res = await fetch('/api/products.json');
        const dataProducts = await res.json();
        const foundProduct = dataProducts.find((product : { id : number }) => product.id === parseInt(id as string));
        setProduct(foundProduct);
      }catch(error){
        console.error("Erro ao buscar o produto: ", error)
      }
    };
      fetchData();
  },[id])

  if(!product){
    return(
      <div>Produto não encontrado!</div>
    )
  }

  return(
    <>
      <h1>{ product.name }</h1>
      <p>R$ { product.price.toFixed(2) }</p>
      <p>ID: { product.id }</p>
      
      {
        product.image && product.image.trim() !== '' ? (
          <Image src={ product.image } alt="Bart" width={ 100 } height={ 100 }/>
        ): (null)
      }

    </>
  )
}
export default ProductPage;