import React from 'react'
import axios from 'axios'

export default class ListaCarros extends React.Component{

    state={
        carros:[]
    }

    componentDidMount(){
        axios.get('https//:'/*aqui dentro das aspas se insere olink*/)
          .then(res=>{
                const dadosCarros=res.data
                this.setState({carros:dadosCarros})

          })     
    }

    render(){
        <div>
            {this.state.carros.map(
                carro=> <div key={carros.id}> {carros.id} - {carro.marca}- {carro.modelo}</div>
            )}
        </div>
    }

}

