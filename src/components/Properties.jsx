import React,{ Component } from "react";
import PropTypes from "prop-types";

export default function Properties(props){
    return(
        <div>
            <h1>{props.porDefecto}</h1>
            <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
                <li>{props.option?"OK":"Not OK"}</li>
                <li>{props.array.join(",")}</li>
                <li>{props.objectPerson.name + " - "+ props.objectPerson.email}</li>
                <li>{props.age}</li>
                <li>{props.array.map(props.myFunction).join(",")}</li>
                <li>{props.reactElement}</li>
                <li>{props.reactComponent}</li>

            </ul>
        </div>        
    );
}

Properties.defaultProps = {
    porDefecto: "Estan son las props",
}

Properties.propTypes = {
    name:PropTypes.string.isRequired,
}