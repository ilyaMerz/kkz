import React, { Component } from "react";

class BrickWorkType extends Component {
  state = {
    brickWorkTypeMultiplier: "1",
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

  onBrickWorkSelect = e => {
    this.checkChanger();
    this.setState({
      brickWorkTypeMultiplier: e.target.value
    });
    setTimeout(() => this.props.onBrickWorkTypeSelectedState(this.state), 0);
    setTimeout(() => this.props.calculateResult(), 0);
    setTimeout(() => this.props.onWorkTypeSelect(), 0);
  };

  render() {
    const imgStyles = {
      height: "20px",
      display: "block",
      margin: "auto"
    };
    return (
      <div className="work-type-wrapper">
        <div className="calculator__brick-work-type__header">
          Выберите тип кладки
        </div>

        <input
          onChange={e => {
            this.onBrickWorkSelect(e);
            this.setState({ checked: false });
          }}
          type="radio"
          id="half-brick"
          name="masonry-type"
          value="1"
          checked={!this.state.checked}
          className="work-type-input"
        />
        <label className="work-type-label" htmlFor="half-brick">
          <img
            style={imgStyles}
            src="./assets/images/half-brickL.png"
            alt="в пол-кирпича"
          />
          В пол-кирпича
        </label>

        <input
          onChange={e => this.onBrickWorkSelect(e)}
          type="radio"
          id="one-brick"
          name="masonry-type"
          value="2"
          className="work-type-input"
        />
        <label className="work-type-label" htmlFor="one-brick">
          <img
            style={imgStyles}
            src="./assets/images/onebrikL.png"
            alt="в кирпич"
          />
          В кирпич
        </label>

        <input
          onChange={e => this.onBrickWorkSelect(e)}
          type="radio"
          id="one-and-half-brick"
          name="masonry-type"
          value="2.5"
          className="work-type-input"
        />
        <label className="work-type-label" htmlFor="one-and-half-brick">
          <img
            style={imgStyles}
            src="./assets/images/one-and-half-briksL.png"
            alt="в полтора кирпича"
          />
          В полтора кирпича
        </label>
        <br />

        <input
          onChange={e => this.onBrickWorkSelect(e)}
          type="radio"
          id="two-briks"
          name="masonry-type"
          value="4"
          className="work-type-input"
        />
        <label className="work-type-label" htmlFor="two-briks">
          <img
            style={imgStyles}
            src="./assets/images/two-briksL.png"
            alt="в два кирпича"
          />
          &nbsp;В два кирпича&nbsp;
        </label>

        <input
          onChange={e => this.onBrickWorkSelect(e)}
          type="radio"
          id="two-and-half-briks"
          name="masonry-type"
          value="5"
          className="work-type-input"
        />
        <label className="work-type-label" htmlFor="two-and-half-briks">
          <img
            style={imgStyles}
            src="./assets/images/two-and-halfL.png"
            alt="в два с половиной кирпича"
          />
          &nbsp;&nbsp;В два с половиной кирпича&nbsp;&nbsp;
        </label>
      </div>
    );
  }
}

export default BrickWorkType;
