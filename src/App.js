import React,{useState} from "react";
import Notas from "./Notas"
import Resultado from "./Resultado"
import Carro from "./Classe"
import TrocaPagina from "./TrocaPagina"
import Tabelas from "./Tabelas"
import IMC from "./IMC/IMC"

export default function App() {

  // SOMA e divisão das notas para a média

  const [nota1, setNota1]= useState()
  const [nota2, setNota2]= useState()
  const [nota3, setNota3]= useState()
  const [nota4, setNota4]= useState()

  
 return (
      <>
      <h1><strong>ESTUDO DE TÉCNICAS E MÉTODOS EM REACT.JS</strong></h1>
      <br/>
      <br/>
      <h1>1. Técnica para navegar entre páginas</h1>
       <TrocaPagina/>
      <br/>
      <br/>
      <br/>
      <h1>2. Técnica para Some e média de Nota com Status de Aprovado/Reprovado.</h1>
      <Notas num={1} nota={nota1} setNota={setNota1}/>
      <Notas num={2} nota={nota2} setNota={setNota2}/>
      <Notas num={3} nota={nota3} setNota={setNota3}/>
      <Notas num={4} nota={nota4} setNota={setNota4}/>

      <Resultado somaNotas={(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4}/>
      <br/>
      <br/>
      <h1>3. Uso de "State" e "Props" alterar estado atual e renderizar na tela.</h1>
      <Carro fator={10}/>
      <br/>
      <br/>
      <h1>4. Uso e filtragem de tabelas dinâmicas.</h1>
      <Tabelas/>
      <br/>
      <br/>
      <h1>5. Calculadora com calculo Simples renderizando: IMC</h1>
      <IMC/>
      </>
  );

 
  
}