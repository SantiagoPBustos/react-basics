import React,{ Component } from "react";
import data from "../helpers/data.json";

function ListElement(props) {
    return(
        <li>
            <a href={props.element.web} target="_blank">
                {props.element.name}
            </a>
        </li>
    );
}

export default class ElementRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera","Verano","Otoño","Invierno"],
        };
    }

    render(){
        return(
            <div>
                <h1>Renderizado de Elementos</h1>
                <ol>
                    {this.state.seasons.map((element,index)=>(
                        <li key={index}>{element}</li>
                    ))}
                    <li></li>
                </ol>
                <h1>Frameworks JavaScript</h1>
                <ol>
                    {data.frameworks.map((element)=>(
                        <ListElement key={element.id} element={element}/>
                    ))}
                    <li></li>
                </ol>
            </div>

        );
    }
}