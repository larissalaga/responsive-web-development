import { useEffect, useState } from "react";

const Exemplo02 = () => {
  const [usuario, setUsuario] = useState([]);
  const[loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchData = async()=>{
      if (loading){
        try{
          const response = await fetch("https://jsonplaceholder.typicode.com/users")
          const data = await response.json();
          setUsuario(data);
        } catch(error){
          console.log("Deus erro", error);
        } finally{
          setLoading(false)
          }
        }
      }
    }
    fetchData();
  },[loading]);
  
  const carregarDados = () =>{
    setLoading(true)
  }



  return (
    <>
      <h1>Exemplo02</h1>
      
      <button>Carregar Dados</button>
      
    </>
  );
};
export default Exemplo02;
