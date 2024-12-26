import React, { Component } from "react";

export default class Food extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: "",
      price: "",
      description: "",
      data: JSON.parse(localStorage.getItem("food")) || [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, description, price } = this.state;

    if (id) {
      const updatedData = this.state.data.map((item) =>
        item.id === id ? { id, name, price, description } : item
      );
      this.setState({
        data: updatedData,
        id: null,
        name: "",
        price: "",
        description: "",
      });
      localStorage.setItem("food", JSON.stringify(updatedData));
    } else {
      let newFood = {
        id: Date.now(),
        name,
        price,
        description,
      };
      const newData = [...this.state.data, newFood];
      this.setState({
        data: newData,
        name: "",
        description: "",
        price: "",
      });
      localStorage.setItem("food", JSON.stringify(newData));
    }
  };

  handleEdit = (prod) => {
    this.setState({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      description: prod.description,
    });
  };

  handleDelete = (id) => {
    const filterData = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: filterData });
    localStorage.setItem("food", JSON.stringify(filterData));
  };

  render() {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <div className="w-80 bg-white shadow-lg p-6 sticky top-0">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">{this.state.id ? "Edit" : "Add"} Food</h1>
          <form action="#" onSubmit={this.handleSubmit}>
            <input
              autoFocus
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              className="w-full h-12 mb-4 indent-3 outline-none border focus:ring-2 focus:ring-indigo-400 rounded-lg"
              placeholder="Name"
              tabIndex={1}
              required
            />
            <input
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
              type="number"
              className="w-full h-12 mb-4 indent-3 outline-none border focus:ring-2 focus:ring-indigo-400 rounded-lg"
              placeholder="Price"
              tabIndex={2}
              required
            />
            <input
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
              type="text"
              className="w-full h-12 mb-4 indent-3 outline-none border focus:ring-2 focus:ring-indigo-400 rounded-lg"
              placeholder="Description"
              tabIndex={3}
              required
            />
            <button className="w-full h-12 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg">
              {this.state.id ? "Update" : "Create"}
            </button>
          </form>
        </div>

        <div className="p-6 flex flex-wrap gap-6 flex-1 items-start">
          {this.state.data?.map((food) => (
            <div
              key={food.id}
              className="w-80 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="w-full h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {food.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {food.description}
                </p>
                <p className="text-lg font-bold text-gray-800">
                  {food.price} so'm
                </p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => this.handleDelete(food.id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => this.handleEdit(food)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
