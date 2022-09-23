import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {EstacaoClimatica} from './EstacaoClimatica';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

// export default function App(){
    
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> console.log(position)
//     )
//     return(
//         <div>
//             Meu App
//         </div>
//     );
// };

class App extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state={
    //             latitude: null,
    //             longitude: null,
    //             estacao:null,
    //             data: null,
    //             icone: null,
    //             mensagemDeErro: null
    //         }
    //     //console.log('construtor');
    //     }

    state = {
        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemDeErro: null
        }

        componentDidMount(){
            this.obterLocalizacao()
        }

        // componentDidUpdate(){
        //     console.log('componenteDidUpdate');
        // }

        // componentWillUnmount(){
        //     console.log('componentWillUnmount');
        // }
    

obterEstacao = (data, latitude)=>{
    const anoAtual = data.getFullYear();
    const d1 = new Date(anoAtual, 5, 21);
    const d2 = new Date(anoAtual, 8, 24);
    const d3 = new Date(anoAtual, 11, 22);
    const d4 = new Date(anoAtual, 2, 21);
    const sul = latitude < 0;
    if(data >=d1 && data < d2)
        return sul ? 'Inverno' : 'Verão';
    if(data >=d2 && data< d3)
        return sul ? 'Privamera' : 'Outono';
    if(data >= d3 && d4)
        return sul ? 'Verão' : 'Inverno';
    return sul ? 'Outono' : 'Primavera';
}
    render(){
        //console.log('render');
        return(
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-mt-8">
                    <EstacaoClimatica
                    icone={this.state.icone}
                    estacao={this.state.estacao}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    data={this.state.data}
                    mensagemDeErro={this.state.mensagemDeErro}
                    obterLocalizacao={this.obterLocalizacao}
                    />
                </div>
            </div>
        </div>
        )
    }

    icones = {
        'Primavera': 'fa-seedling',
        'Verão': 'fa-umbrella-beach',
        'Outono': 'fa-tree',
        'Inverno': 'fa-snowman'
        };
    
    
    obterLocalizacao = ()=>{
        window.navigator.geolocation.getCurrentPosition(
            //função callback
            (posicao) =>{
                let data = new Date()
                let estacao = this.obterEstacao(data, posicao.coords.latitude)
                let icone = this.icones[estacao]
                console.log(icone)
                this.setState({
                    latitude: posicao.coords.latitude,
                    longitude: posicao.coords.longitude,
                    estacao: estacao,
                    data: data.toLocaleString(),
                    icone: icone
                })
            },
            (err)=>{
                console.log(err)
                this.setState({mensagemDeErro: 'Tente novamente mais tarde'})
            }
        )
    }; 
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);