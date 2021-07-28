import React from 'react'

export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='HRV'
        this.state={
            ligado:false,
            velAtual:0,
        }
        this.ld=this.ligarDesligar.bind(this) // uso de bind, mais seguro e simplificando a chamada da funcao.
    }

    ligarDesligar(){
        //this.state.ligado=true => ele troca o estado mas não rederiza
        // this.setState({ligado:!this.state.ligado}) usar arrow function é mais seguro !!! =>

        this.setState(
            (state)=>(
                {ligado:!state.ligado}
            )
        )
        
    
    }
    acelerar(){
        this.setState(
                (state,props)=>(
                    {velAtual:state.velAtual + props.fator}
                    
                )
        )
    }


    render(){
        return(
         <div>
            <h1>Meu Carro</h1>
            <p>Modelo: {this.modelo}</p>
            <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
            <p>Vel.Atual: {this.state.velAtual}</p>
            <button onClick={this.ld}>
                {this.state.ligado ? 'Desligar Carro': 'Ligar Carro'}
            </button>
            <button onClick={()=>this.acelerar()}>Acelerar</button>
         </div>
        )
    }


   
}