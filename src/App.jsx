import { Component } from "react";
import Car from "./components/car/Car";
import Food from "./components/food/Food";
import Products from "./components/products/Productsj";
import Hero from "./components/hero/Hero";
import PlayApp from "./components/playApp/PlayApp";
import Header from "./components/header/Header";
import Router from "./routes/Router";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Router />
      </>
    );
  }
}

export default App;
