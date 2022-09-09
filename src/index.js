import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    constructor(props){
        super(props)
            this.state={
                latitude: null,
                longitude: null,
                estacao:null,
                data: null,
                icone: null
            }
        }


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
        return(
        <div>
            Meu App
        </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);