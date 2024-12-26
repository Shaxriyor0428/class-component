import React, { Component } from "react";
import Layout from "../pages/layout/Layout";
import { Route, Routes } from "react-router-dom";
import PlayApp from "../components/playApp/PlayApp";
import Car from "../components/car/Car";
import Food from "../components/food/Food";
import Notfound from "../pages/not-found/Notfound";
import Home from "../pages/home/Home";

export default class Router extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<PlayApp />} />
          <Route path="/car" element={<Car />} />
          <Route path="/food" element={<Food />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    );
  }
}
