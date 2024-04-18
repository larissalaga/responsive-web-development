import { useEffect } from "react"
import products from '../api/products.json'



const productPage =(params: )=>{
    const product = products.find((product)=>product.id=== params.productId);

    //useEffect()
}