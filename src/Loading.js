import React, {Component} from 'react';

export class Loading extends Component{

    render(){
        return(

            <div className="d-flex justify-content-center align-items-center border rounded p-3">
                <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}}>
                    {/* deve ser utilizado somente por dispositivos de acessibilidade, como leitores de
                    tela */}
                    <span className="visually-hidden">Carregando...</span>
                </div>
                <p className="text-primary">{this.props.mensagem}</p>
            </div>
        )
    }
}
Loading.defaultProps={
    mensagem: 'Carregando...'
}