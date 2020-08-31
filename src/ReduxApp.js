import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from "./store/store";

class App extends Component {
  render() {
    return [
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />,
     <HelloWorld key={1} tech={store.getState().tech} />

    ];
  }
}

export default App;