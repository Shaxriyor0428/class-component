import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-red-600 my-4">404</h1>
          <p className="text-xl">Sahifa topilmadi!</p>
          <p className="my-4">Kiritilgan manzil noto'g'ri yoki mavjud emas.</p>
          <Link
            to={"/"}
            className="bg-green-500 text-white text-2xl py-1 px-5 rounded-lg"
          >
            Go home
          </Link>
        </div>
      </div>
    );
  }
}
