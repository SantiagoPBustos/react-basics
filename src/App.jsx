import { Component, useState } from 'react'
import './App.css'
import Componente from './components/Componente'
import Properties from './components/Properties'
import State from './components/State'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import {MyEventsES6, MyEventsES7, MostAboutEvents} from './components/MyEvents'
import ComponentComunication from './components/ComponentComunication'
import CicloVida from './components/LifeCicle'
import AjaxAPIS from './components/AjaxAPIS'

function App() {
  const [count, setCount] = useState(0);
  let name="Santi";
  let prices=[213,1234,8656,4902];
  let auth=true;
  return (
    <>
    <div>
      <Componente msg="Hola Soy Componente Funcional expresado"/>
      <hr></hr>
      <Properties
        name="Santi"
        age={21} 
        option={false}
        array={[1,2,3]}
        objectPerson={{name:"Santi", email:"dasapibu@gmail.com"}}
        myFunction = {(num)=>num*num}
        reactElement={<i>Esto es un react element</i>}
        reactComponent={
          <Componente msg="Hola Soy Componente como Prop"/>
        }
      />
      <hr/>
      <State/>
      <hr/>
      <RenderizadoCondicional/>
      <hr/>
      <RenderizadoElementos/>
      <hr/>
      <MyEventsES6/>      
      <hr/>
      <MyEventsES7/>  
      <hr/>
      <MostAboutEvents/>
      <hr/>
      <ComponentComunication/>
      <hr/>
      <CicloVida/>      
      <hr/>
      <AjaxAPIS/>
    </div>
    </>
  )
}

export default App
