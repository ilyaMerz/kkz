import React, { Component } from "react";

class WallSize extends Component {
  state = {
    wallSize: " ",
    gapSize: " "
  };

  styleChanger = () => {
    document.getElementById("wall-size-input-result").classList.remove("red");
    document.getElementById("wall-size-input-result").classList.add("green");
    document
      .getElementById("brick-wall-wrapper-id")
      .classList.remove("red-border");
    document.getElementById("wall-size-input-result").innerHTML =
      " &#x2714; Площадь стен введена";
  };

  change = e => {
    e.preventDefault();

    if (isNaN(e.target.value)) {
      document.getElementById("wall-size-wrapper__attention").innerHTML =
        " Введите число";
    } else if (e.target.value < 0) {
      document.getElementById("wall-size-wrapper__attention").innerHTML =
        " БОРИСЬ С СИСТЕМОЙ!";
    } else {
      this.styleChanger();
      document.getElementById("wall-size-wrapper__attention").innerHTML = " ";

      this.setState({
        [e.target.name]: e.target.value
      });

      setTimeout(
        () =>
          this.props.onWallSiaeChangeState(
            this.state.wallSize,
            this.state.gapSize
          ),
        0
      );
      setTimeout(() => this.props.calculateResult(), 100);
    }
  };
  render() {
    return (
      <div className="wall-size-wrapper">
        <div className="wall-size-header">Укажите площадь стен м2</div>
        <label htmlFor="wallSizeInput">Площадь стен м2 </label>
        <input
          name="wallSize"
          value={this.state.wallSizeResult}
          onChange={e => this.change(e)}
          id="wallSizeInput"
          type="text"
          className="wallSizeInput"
        />
        <span
          id="wall-size-wrapper__attention"
          className="wall-size-wrapper__attention"
        />
        <br />
        <label htmlFor="wallSizeInput">Площадь проемов м2 </label>
        <input
          name="gapSize"
          value={this.state.gapSize}
          onChange={e => this.change(e)}
          id="gapSizeInput"
          type="text"
          className="gapSizeInput"
        />
      </div>
    );
  }
}

export default WallSize;
