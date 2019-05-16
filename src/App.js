import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CSVReader from 'react-csv-reader'
import Vertex from './components/Vertex'
import Graph from './components/Graph'

import './App.css'

function Queue() {
  this.data = [];
}



const q = new Queue();
const finalList = [];
let visited = [];
let targets = [];


const recommendFriends = data => {
  visited = visited.map((bool) => bool=false );
  //color is a nice prop but honestly not needed for the app to work properly.
  const verticies = data.map((edge) => <Vertex key={edge[0]} value={edge[0]} predecessor={edge[1]}  color='blue'/>);

  q.data.unshift(verticies[0].props.value);
  visited[0]= verticies[0].props.value
  let qsize = q.data.length
  let i = 1;
  while ( i<verticies.length ) {

    let val = q.data.pop();
    targets.push(val);

    if (!visited.includes(verticies[i].props.predecessor)) {
      q.data.unshift(verticies[i].props.predecessor);
      i++;
    }else {
      i++;
    }
  }

    const final = verticies.map((vertex) =>{
      console.log(vertex)
    });
  }


const handleDarkSideForce = () => {
  console.log("You really cant do anything");
};



class App extends Component {
  render() {
    return (
      <CSVReader
        cssClass="csv-reader-input"
        label="Select the CSV you will use to generate edges and verticies"
        onFileLoaded={recommendFriends}
        onError={handleDarkSideForce}
        inputId="picker"
        inputStyle={{color: 'red'}}
      />
    )
  }
}

export default App
