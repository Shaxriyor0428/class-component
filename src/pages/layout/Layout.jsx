import React, { Component } from "react";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
}
