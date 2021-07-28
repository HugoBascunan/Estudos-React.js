import React, {useState} from 'react'

const carros = [
    {categoria:'Popular' ,preço: 'R$30,000', modelo:'Gol' },
    {categoria:'SUV' ,preço:'R$90,000' , modelo:'HRV' },
    {categoria:'Esporte' ,preço: 'R$130,000', modelo: 'Camaro'},
    {categoria:'SUV',preço:'R$80,000' , modelo:'Toro' },
    {categoria:'Utilitario' ,preço: 'R$130,000', modelo:'Hilux' },
    {categoria:'Caminhão',preço:'R$50,000' , modelo: '1113'},
    {categoria:'Popular' ,preço:'R$60,000' , modelo: 'Argo' },
    {categoria:'SUV' ,preço:'R$90,000' , modelo:'X1' },
    {categoria:'Caminhão',preço:'R$70,000' , modelo:'Scania' },
    {categoria:'Popular' ,preço: 'R$20,000', modelo:'Uno' },
    {categoria:'Utilitario',preço: 'R$130,000', modelo: 'Defender'},
    {categoria:'SUV' ,preço: 'R$35,000', modelo:'Tucson' },
    {categoria:'Popular' ,preço: 'R$20,000', modelo: 'Clio'},
    {categoria:'Esporte' ,preço: 'R$130,000', modelo:'Mustang' },
    {categoria:'Popular' ,preço: 'R$30,000', modelo: 'Vectra' },
    {categoria:'Esporte' ,preço: 'R$230,000', modelo: 'Corvette' },
    {categoria:'Popular' ,preço: 'R$30,000', modelo:'Etios' },
    {categoria:'Esporte' ,preço: 'R$1,230,000', modelo:'Ferrari' },
    {categoria:'Popular' ,preço: 'R$90,000', modelo: 'Golf' },
]

const linhas=(cat)=>{
    const li=[]
    carros.forEach(
        (carro)=>{
            if(carro.categoria.toUpperCase()==cat.toUpperCase()  || cat.toUpperCase() == ''){
                li.push(
                    <tr>
                        <td>{carro.categoria}</td>
                        <td>{carro.preço}</td>
                        <td>{carro.modelo}</td>
                    </tr>
                )
            }
        }
    )
    return li
}

const tabelaCarros=(cat)=>{
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                <th>Categoria</th><th>Preço</th><th>Modelo</th>
                </tr>
            </thead>
            <tbody>
                {linhas(cat)}
            </tbody>
        </table>
    )    
}

const pesquisaCategoria=(cat,scat)=>{ 
    return(
        <div>
            <label>Digite uma categoria</label>
            <input type="text" value={cat} onChange={(e)=>scat(e.target.value)}/>
        </div>
    )
}

export default function Tabelas(){
    const [categoria, setCategoria]=useState('')

    return (
        <>
            {pesquisaCategoria(categoria,setCategoria)}
            <br/>
            {tabelaCarros(categoria)}
        </>
    )
}