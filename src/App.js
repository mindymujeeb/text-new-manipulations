import React from "react";
import FormComponent from "./components/FormComponent";
import Navbar from "./components/Navbar";

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <FormComponent />
      </div>
    );
  }
}