import React, { Component } from "react";

class JointType extends Component {
  state = {
    jointSize: 0,
    checked: false
  };

  checkChanger = () => {
    if (this.state.checked === false) {
      this.setState({
        checked: true
      });
    } else {
      return;
    }
  };

  setJointSize = e => {
    this.checkChanger();
    this.setState({
      jointSize: e.target.value
    });
    setTimeout(() => this.props.onJointSizeSelectState(this.state), 0);
    setTimeout(() => this.props.calculateResult(), 0);
    setTimeout(() => this.props.onJointSizeChange(), 100);
  };

  render() {
    return (
      <div className="jointSizeWrapper">
        <div className="jointSizeHeader">Укажите размер растворного шва</div>
        <div className="jointSize__input-wrapper">
          <span className="joint-size__input">
            <input
              onChange={e => {
                this.setJointSize(e);
                this.setState({ checked: false });
              }}
              type="radio"
              id="0"
              name="joint-type-radio"
              value="0"
              checked={!this.state.checked}
            />
            <label htmlFor="0">Не учитывать</label>
          </span>

          <span className="joint-size__input">
            <input
              onClick={e => this.setJointSize(e)}
              type="radio"
              id="1"
              name="joint-type-radio"
              value="8"
            />
            <label htmlFor="1">8 мм.</label>
          </span>

          <span className="joint-size__input">
            <input
              onClick={e => this.setJointSize(e)}
              type="radio"
              id="2"
              name="joint-type-radio"
              value="10"
            />
            <label htmlFor="2">10 мм.</label>
          </span>

          <span className="joint-size__input">
            <input
              onClick={e => this.setJointSize(e)}
              type="radio"
              id="3"
              name="joint-type-radio"
              value="12"
            />
            <label htmlFor="3">12 мм.</label>
          </span>

          <span className="joint-size__input">
            <input
              onClick={e => this.setJointSize(e)}
              type="radio"
              id="4"
              name="joint-type-radio"
              value="15"
            />
            <label htmlFor="4">15 мм.</label>
          </span>
        </div>
      </div>
    );
  }
}

export default JointType;

/* This component sets size of cementJoint */
