import React, { Component } from "react";

class TypesOfBrikSelector extends Component {
  state = {
    selectedBirck: this.props.briks[0],
    selectdBrickWidth: "250",
    selectedBrickHeight: "65",
    selectedBrickPrice: "5.70"
    // checked: false
  };

  styleChanger = () => {
    document.getElementById("brick-type-input-result").classList.add("green");
    document.getElementById("brick-type-input-result").innerHTML =
      " &#x2714; " + this.state.selectedBirck.title;
  };

  onBirckSelect(singleBrick) {
    this.styleChanger();
    this.setState({
      selectedBirck: singleBrick,
      selectdBrickWidth: singleBrick.width,
      selectedBrickHeight: singleBrick.height,
      selectedBrickPrice: singleBrick.price,
      checked: true
    });
    setTimeout(() => this.props.onBirckSelectState(this.state), 0);
    setTimeout(() => this.props.calculateResult(), 0);
    setTimeout(() => this.props.onJointSizeChange(), 0);
    setTimeout(() => this.props.onWorkTypeSelect(), 0);
  }

  render() {
    const birckTypes = this.props.briks.map(singleBrick => {
      return (
        <div key={singleBrick.id}>
          <div className="brck-type">
            <div>
              <input
                className="brick-input"
                defaultChecked={singleBrick.checked}
                onChange={() => {
                  this.onBirckSelect(singleBrick);
                }}
                type="radio"
                id={singleBrick.id}
                name="brick-type-radio"
              />
              <label className="brick-label" htmlFor={singleBrick.id}>
                {singleBrick.title}
              </label>
              <br />
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="brick-types-wrapper">
        <div className="bricks-header">Выберете вид кирпича</div>
        <div className="bricksSelector">{birckTypes}</div>
      </div>
    );
  }
}

export default TypesOfBrikSelector;
