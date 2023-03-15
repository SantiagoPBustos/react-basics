import React,{ Component } from "react";

function Login() {
    return(
        <div>
            <h3>LOG IN</h3>
        </div>
    );
}

function LogOut() {
    return(
        <div>
            <h3>LOG OUT</h3>
        </div>
    );
}

 export default class ConditionalRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            session: false
        }

    }

    render(){
        return(
            <div>  
                <h1>RENDERIZADO CONDICIONAL</h1>
                {this.state.session?<LogOut/>:<Login/>}
                
                
            </div>
     )
    } ;
 }