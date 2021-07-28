import React,{useEffect, useState} from "react";
import Linkandotelas1 from "./Linkandotelas1";
import Linkandotelas2 from "./Linkandotelas2";

export default function App() {



  //troca de página => A pagina carrega todos os componentes (nota e carro) mas o link carrega diferente eaparece a mensagem de cada página
  // ou seja, provavelmente é necessario colocar o App como inicial carregando todas as paginas cada uma com seus componentes, inclusive a 
  // home separada.

  const [pagina, setPagina]=useState(0)

  useEffect(
    ()=>{
      const url=window.location.href
      const res=url.split('?')
      setPagina(res[1])
    }
  )

  const LinksPaginas=(p)=>{
    if (p==1){
      window.open('http://localhost:3000?1', '_self')
    } else if (p==2){
      window.open('http://localhost:3000?2', '_self')
    }
  }
  const retornarPagina=()=>{
    if(pagina==1){
      return <Linkandotelas1/>
    }else if (pagina==2){
      return <Linkandotelas2/>
    }else {
      return <div>
                <button onClick={()=>LinksPaginas(1)}>Ir para página 1.</button>
                <button onClick={()=>LinksPaginas(2)}>Ir para página 2.</button>
             </div>
    }
  }
   
 return (
      <>
     
      
      {retornarPagina()}


      </>
  );

  // Treinar uso de useEffect = altera com funcoes
 // useEffect(
  //  ()=>{
  //    
  //  }  
  //)
  
}