import React, { Component } from "react";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      show: false,
      data: null,
    };
    this.increment = this.increment.bind(this);
  }
  handleClick() {
    alert("Class component");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  handleReset = () => {
    this.setState({ count: 0 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleShow = () => {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  };

  componentDidMount() {
    alert("Helloe componentDidMount");
  }
  componentDidUpdate() {
    console.log("Comoonetnet componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount o'ldi");
  }
  render() {
    return (
      <div>
        <h2>
          Hero {this.props.title} {this.state.count}{" "}
        </h2>
        <button
          onClick={this.increment}
          className="py-1 px-6 bg-red-500 rounded-md text-white"
        >
          Increment
        </button>
        <button
          disabled={this.state.count <= 0}
          onClick={this.decrement}
          className="py-1 px-6 disabled:bg-opacity-40 bg-gray-500 rounded-md text-white"
        >
          Decrement
        </button>

        {this.state.count ? (
          <button
            onClick={this.handleReset}
            className="border text-red-800 px-2 mx-2"
          >
            Reset
          </button>
        ) : (
          ""
        )}

        <button
          onClick={this.handleClick}
          className="py-1 px-6 bg-blue-500 rounded-md text-white"
        >
          Click
        </button>
        <br />
        <button
          onClick={this.handleShow}
          className="py-1 px-6 bg-yellow-500 mt-4 rounded-md text-white"
        >
          {this.state.show ? "Show less" : "Show more"}
        </button>
        {this.state.show ? (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            assumenda quas, debitis iste ipsa totam delectus architecto quis rem
            sapiente harum ducimus fuga inventore facilis? Adipisci commodi
            labore aspernatur quam odio illum accusantium temporibus nobis
            exercitationem mollitia sequi libero distinctio sed, porro veniam
            repudiandae quae reprehenderit iure consequuntur quaerat qui.
          </p>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
