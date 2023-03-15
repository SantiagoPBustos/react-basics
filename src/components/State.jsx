import React,{ Component } from "react";

function StateToSon(props) {
    return(
        <div><p>{props.contadorHijo}</p></div>
    );
}

export default class State extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            text: "Calle 50b # 9g-28"
        }

        /*setInterval(()=>{
            this.setState({
                contador: this.state.contador+1,
            });
        },1000);*/
    }

    render(){
        return(
            <div>
                <h1>ESTADOS</h1>
                <p>{this.state.contador}</p>
                <p>{this.state.text}</p>
                <StateToSon contadorHijo={this.state.contador}/>
            </div>
            );
    }
}