import React,{ Component } from "react";

export class MyEventsES6 extends Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }

        this.sum = this.sum.bind(this);
        this.substract = this.substract.bind(this);
    }

    sum(e){
        this.setState({
            count: this.state.count +1,
        });
    }

    substract(e){
        this.setState({
            count: this.state.count -1,
        });
    }

    render(){
        return (
            <div>
                <h1>Esto es un Evento ES6</h1>
                <button onClick={this.sum}>SUMAR</button>
                <button onClick={this.substract}>RESTAR</button>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
    
}

export class MyEventsES7 extends Component{

    state = {count: 0,}

    sum=(e)=>{
        this.setState({
            count: this.state.count +1,
        });
    }

    substract=(e)=>{
        this.setState({
            count: this.state.count -1,
        });
    }

    render(){
        return (
            <div>
                <h1>Esto es un Evento ES7</h1>
                <button onClick={this.sum}>SUMAR</button>
                <button onClick={this.substract}>RESTAR</button>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
    
}


/* function MyButton(props) {
  return <button onClick={props.myOnClick}>Botón hecho componente</button>;
} */

/* const MyButton = (props) => (
  <button onClick={props.myOnClick}>Botón hecho componente</button>
); */

const MyButton = ({ myOnClick }) => (
    <button onClick={myOnClick}>Botón hecho componente</button>
);
  
  export class MostAboutEvents extends Component {
    handleClick = (e, mensaje) => {
      console.log(e);
      console.log(e.nativeEvent);
      console.log(e.target);
      console.log(e.nativeEvent.target);
      console.log(mensaje);
    };
  
    render() {
      return (
        <div>
          <h2>Más Sobre Eventos</h2>
          <button
            onClick={(e) =>
              this.handleClick(e, "Hola pasando parámetro desde un evento")
            }
          >
            Saludar
          </button>
          {/* Evento Personalizado */}
          {/* <MyButton
            onClick={(e) =>
              this.handleClick(e, "Hola pasando parámetro desde un evento")
            }
          /> */}
          <MyButton
            myOnClick={(e) =>
              this.handleClick(e, "Hola pasando parámetro desde un evento")
            }
          />
        </div>
      );
    }
}
