import React, { Component } from "react";
import axios from "axios";
export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    axios.get("https://dummyjson.com/products").then((res) => {
      this.setState({ data: res.data.products });
    });
  }

  render() {
    return (
      <div>
        Products
        {this.state.data?.map((item) => (
          <div key={item.id} className="flex flex-wrap">
            <img src={item.thumbnail} key={item.id} alt="" />
          </div>
        ))}
      </div>
    );
  }
}
