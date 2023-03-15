import React,{ cloneElement, Component } from "react";

export default class Father extends Component{
    state = {contador: 0,};

    incrementarContador = (e) =>{
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    decrementarContador = (e) =>{
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Comunicacion entre componentes = {this.state.contador}</h2>
                <Son increment={this.incrementarContador} message="Hola soy hijo 1"/>
                <Son decrement={this.decrementarContador} message="Hola soy hijo 2"/>
            </div> 
        );
    }
}

function Son(props) {
    return <>
        <h3>{props.message}</h3>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
    </>
}