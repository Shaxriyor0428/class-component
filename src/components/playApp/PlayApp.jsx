import { Component } from "react";

class PlayApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      isEnter: false,
      random: null,
      selectNum: 0,
      message: "",
      count: 1,
      success: false,
    };
  }

  changeUser = () => {
    this.setState({
      user: "Samadqul",
    });
  };

  enterStart = (e) => {
    this.setState({
      start: +e.target.value,
    });
  };

  enterEnd = (e) => {
    this.setState({
      end: +e.target.value,
    });
  };

  random = () => {
    if (this.state.start && this.state.end) {
      let randomNumber = Math.round(
        Math.abs(this.state.start - this.state.end) * Math.random() +
          this.state.start
      );

      this.setState({
        isEnter: true,
        random: randomNumber,
      });

      console.log(randomNumber);
    } else {
      this.setState({
        isEnter: false,
        random: 0,
      });
    }
  };

  reEnter = () => {
    this.setState({
      isEnter: false,
      random: 0,
      success: false,
    });
  };

  enterSelection = (e) => {
    this.setState({
      selectNum: +e.target.value,
    });
  };

  logic = () => {
    if (this.state.selectNum == this.state.random) {
      this.setState({
        message: `Siz yashirin sonni ${this.state.count} qadamda topdingiz! Yashirin son: ${this.state.random}`,
        success: true,
      });
    } else if (this.state.selectNum > this.state.random) {
      this.state.message = `Yashirin son ${this.state.selectNum} dan kichik`;
      this.setState({
        count: this.state.count + 1,
      });
    } else if (this.state.selectNum < this.state.random) {
      this.state.message = `Yashirin son ${this.state.selectNum} dan katta`;
      this.setState({
        count: this.state.count + 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="flex items-center justify-center py-10">
            <h1 className="text-xl font-semibold mr-2">Sonlarni kiriting:</h1>
            <input
              onChange={this.enterStart}
              type="number"
              placeholder="start"
              disabled={this.state.isEnter}
              className="border border-gray-300 rounded-lg py-2 px-4 outline-none w-20 mr-2"
            />
            <input
              onChange={this.enterEnd}
              type="number"
              placeholder="end"
              disabled={this.state.isEnter}
              className="border border-gray-300 rounded-lg py-2 px-4 outline-none w-20 mr-2"
            />
            {this.state.isEnter ? (
              <input
                onClick={this.reEnter}
                type="button"
                className="border-none rounded-lg py-2 px-4 outline-none bg-yellow-600 hover:bg-green-600 duration-100 text-white"
                value="Qayta kiritish"
              />
            ) : (
              <input
                onClick={this.random}
                type="button"
                className="border-none rounded-lg py-2 px-4 outline-none bg-blue-600 text-white"
                value="random"
              />
            )}
          </div>
          {this.state.isEnter && (
            <>
              <div className="flex items-center justify-center">
                <h1 className="text-xl font-semibold mr-2">
                  Soningizni kiriting:
                </h1>
                <input
                  disabled={this.state.success}
                  onChange={this.enterSelection}
                  type="number"
                  placeholder="your number"
                  className="border border-gray-300 rounded-lg py-2 px-4 outline-none w-[150px] mr-2"
                />
                <input
                  disabled={this.state.success}
                  onClick={this.logic}
                  type="button"
                  className="border-none rounded-lg py-2 px-4 outline-none bg-green-600 text-white"
                  value="Kiritish"
                />
              </div>
              <div className="text-center mt-10">
                <span className="text-gray-600">{this.state.message}</span>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default PlayApp;
