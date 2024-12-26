import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page!</h1>
          <p className="text-lg">
            Bu sahifa saytning asosiy sahifasi bo'lib, boshqa sahifalarga o'tish
            uchun yuqoridagi menyudan foydalanishingiz mumkin.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
