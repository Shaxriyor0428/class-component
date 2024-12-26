import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header id="header" className="w-full h-16 mb-2 shadow-md">
        <div className=" container h-full">
          <ul className="flex gap-10 text-2xl h-full w-full items-center justify-center">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/car"}>Car</NavLink>
            </li>
            <li>
              <NavLink to={"/food"}>Food</NavLink>
            </li>
            <li>
              <NavLink to={"/play"}>Number game</NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
