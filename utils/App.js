import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import './App.css';
import Logo from './Logo';
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";


class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="App-header">
         <Logo />
         <h2>Welcome to React</h2>
         </div>
         <p className="App-intro">
           To get started, edit <code></code>
         </p>

        </div>
      </div>
    );
  }
}
