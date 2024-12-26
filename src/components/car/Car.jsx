import React, { Component } from "react";

export default class Car extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: "",
      model: "",
      price: "",
      description: "",
      year: "",
      data: JSON.parse(localStorage.getItem("car")) || [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, description, year, price, model, data } = this.state;

    if (id) {
      const updatedData = data.map((car) =>
        car.id === id ? { id, name, description, year, price, model } : car
      );
      this.setState({
        data: updatedData,
        id: null,
        name: "",
        description: "",
        price: "",
        year: "",
        model: "",
      });
      localStorage.setItem("car", JSON.stringify(updatedData));
    } else {
      const car = {
        id: Date.now(),
        name,
        description,
        year,
        price,
        model,
      };

      const newCar = [...data, car];
      this.setState({
        data: newCar,
        name: "",
        description: "",
        price: "",
        year: "",
        model: "",
      });
      localStorage.setItem("car", JSON.stringify(newCar));
    }
  };

  handleDelete = (id) => {
    const filteredData = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: filteredData });
    localStorage.setItem("car", JSON.stringify(filteredData));
  };

  handleEdit = (car) => {
    this.setState({
      id: car.id,
      name: car.name,
      price: car.price,
      description: car.description,
      model: car.model,
      year: car.year,
    });
  };

  render() {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <div className="w-80 bg-white shadow-lg p-6 sticky top-0 ">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            {this.state.id ? "Edit" : "Add"} Car
          </h1>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              className="w-full h-12 mb-4 indent-3 outline-none border focus:ring-2 focus:ring-indigo-400 rounded-lg"
              placeholder="Name"
              required
            />
            <input
              value={this.state.model}
              onChange={(e) => this.setState({ model: e.target.value })}
              type="text"
              className="w-full h-12 mb-4 indent-3 outline-none border focus:ring-2 focus:ring-indigo-400 rounded-lg"
              placeholder="Model"
              required
            />
            <input
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
              type="number"
              className="w-full h-12 mb-4 indent-3 outline-none border focus:ring-2 focus:ring-indigo-400 rounded-lg"
              placeholder="Price"
              required
            />
            <input
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
              type="text"
              className="w-full h-12 mb-4 indent-3 outline-none border focus:ring-2 focus:ring-indigo-400 rounded-lg"
              placeholder="Description"
              required
            />
            <input
              value={this.state.year}
              onChange={(e) => this.setState({ year: e.target.value })}
              type="number"
              className="w-full h-12 mb-4 indent-3 outline-none border focus:ring-2 focus:ring-indigo-400 rounded-lg"
              placeholder="Year"
              required
            />
            <button
              type="submit"
              className="w-full h-12 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg"
            >
              {this.state.id ? "Update" : "Create"}
            </button>
          </form>
        </div>

        <div className="p-6 flex flex-wrap gap-6 flex-1 items-start">
          {this.state.data?.map((car) => (
            <div
              key={car.id}
              className="w-80 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="w-full h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {car.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {car.description}
                </p>
                <p className="text-lg font-bold text-gray-800">
                  {car.price} USD
                </p>
                <p className="text-gray-700 text-sm">Year: {car.year}</p>
                <p className="text-gray-700 text-sm">Model: {car.model}</p>
                <div key={car.id + "s"} className="flex gap-4 mt-4">
                  <button
                    onClick={() => this.handleDelete(car.id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => this.handleEdit(car)}
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
