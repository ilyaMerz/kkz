//Таблица для сверки https://evrostroi.com.ua/a105257-tablitsa-rascheta-rashod.html

import React, { Component } from "react";
import TypesOfBrikSelector from "./calculatorBriksTypeComponent";
import BrickWorkType from "./calculatorBrickWorkTypeComponent";
import JointType from "./calculatorJointTypeComponent";
import WallSize from "./calculatorWallSizeComponent";

class Calculator extends Component {
  state = {
    selectedBirck: null,
    selectdBrickWidth: 0,
    selectedBrickHeight: 0,
    selectedBrickPrice: 0,
    jointSize: 0,
    brickWorkTypeMultiplier: 1,
    wallSize: " ",
    gapSize: " "
  };

  /* I take data from  TypesOfBrikSelector
  and pass it to this satate */
  onBirckSelectState = briksTypeData => {
    this.setState(briksTypeData);
  };

  /* I take data from JoinType and pass it to 
  this state */
  onJointSizeSelectState = jointSizeData => {
    this.setState(jointSizeData);
  };

  onBrickWorkTypeSelectedState = briksWorkData => {
    this.setState(briksWorkData);
  };

  onWorkTypeSelect = () => {
    if (this.state.brickWorkTypeMultiplier === "1") {
      document.getElementById("work-type-input-result").innerHTML =
        " &#x2714; Кладка в пол-кирпича";
    } else if (this.state.brickWorkTypeMultiplier === "2") {
      document.getElementById("work-type-input-result").innerHTML =
        " &#x2714; Кладка в кирпич";
    } else if (this.state.brickWorkTypeMultiplier === "2.5") {
      document.getElementById("work-type-input-result").innerHTML =
        " &#x2714; Кладка в полтора кирпича";
    } else if (this.state.brickWorkTypeMultiplier === "4") {
      document.getElementById("work-type-input-result").innerHTML =
        " &#x2714; Кладка в два кирпича";
    } else if (this.state.brickWorkTypeMultiplier === "5") {
      document.getElementById("work-type-input-result").innerHTML =
        " &#x2714; Кладка в два c половиной кирпича";
    }
  };
  onWallSiaeChangeState = ({ WallSizeData, gapSizeData }) => {
    this.setState({
      wallSize: WallSizeData,
      gapSize: gapSizeData
    });
  };

  onJointSizeChange = () => {
    document.getElementById("joint-type-input-result").innerHTML =
      this.state.jointSize === 0
        ? " &#x2714; Не учитываем растворный шов "
        : " &#x2714; Растворный шов " + this.state.jointSize + " мм";
  };

  /* The new Calculate final result */

  calculateResult = () => {
    let meters = +this.state.wallSize - +this.state.gapSize;
    let areaOfoneBrick =
      (+this.state.selectdBrickWidth + +this.state.jointSize) *
      (+this.state.selectedBrickHeight + +this.state.jointSize);
    let briksInAMeter = 1000000 / areaOfoneBrick;

    let briksInAMeterWithBrickWorkType =
      briksInAMeter * this.state.brickWorkTypeMultiplier;

    let briksInAWholeBuilding = +briksInAMeterWithBrickWorkType * +meters;
    let wholePrice = +this.state.selectedBrickPrice * +briksInAWholeBuilding;

    if (this.state.selectedBirck === null) {
      document.getElementById("brick-type-input-result").innerHTML =
        " &#x2717 Выберете тип кирпича";
      document.getElementById("result-window-price-id").innerHTML = "0";
    } else if (
      isNaN(briksInAWholeBuilding) ||
      isNaN(wholePrice) ||
      briksInAWholeBuilding === Infinity ||
      briksInAWholeBuilding < 0 ||
      this.state.gapSize > this.state.wallSize
    ) {
      document.getElementById("result-window-id").innerHTML = "0";
      document.getElementById("result-window-price-id").innerHTML = "0";
    } else if (this.state.wallSize === " ") {
      document.getElementById("wall-size-input-result").innerHTML =
        " &#x2717 Введите площадь стен";
      document
        .getElementById("brick-wall-wrapper-id")
        .classList.add("red-border");
    } else {
      document.getElementById("result-window-id").innerHTML = Math.round(
        briksInAWholeBuilding
      );
      document.getElementById("result-window-price-id").innerHTML = Math.round(
        wholePrice
      );
    }
  };

  render() {
    return (
      <div id="calc" className="calculator">
        <h2 className="calculator__subheader subheader">Калькулятор кирпича</h2>

        <div className="results">
          <div className="result-window-header">Результаты</div>
          <div className="results-wrapper">
            <div className="brick-results-wrapper">
              <span
                id="result-window-id"
                className="result-window__result-text"
              >
                0
              </span>
              <br />
              <span className="total-bricks">кирпичей</span>
            </div>
            <div className="price-results-wrapper">
              <span
                id="result-window-price-id"
                className="result-window__result-price"
              >
                0
              </span>
              <br />
              <span className="total-bricks">рублей</span>
            </div>
            <div className="calculator-tickers">
              <div
                id="brick-type-input-result"
                className="result-window__result-text__checker red"
              />
              <div
                id="wall-size-input-result"
                className="result-window__result-text__checker red"
              />
              <div
                id="joint-type-input-result"
                className="result-window__result-text__checker green"
              />
              <div
                id="work-type-input-result"
                className="result-window__result-text__checker green"
              />

              <br />
            </div>
          </div>
        </div>

        <TypesOfBrikSelector
          briks={this.props.briks}
          onBirckSelectState={briksTypeData =>
            this.onBirckSelectState(briksTypeData)
          }
          calculateResult={() => this.calculateResult()}
          onJointSizeChange={() => this.onJointSizeChange()}
          onWorkTypeSelect={() => this.onWorkTypeSelect()}
        />
        <JointType
          onJointSizeSelectState={jointSizeData =>
            this.onJointSizeSelectState(jointSizeData)
          }
          calculateResult={() => this.calculateResult()}
          onJointSizeChange={() => this.onJointSizeChange()}
        />

        <BrickWorkType
          onBrickWorkTypeSelectedState={briksWorkData =>
            this.onBrickWorkTypeSelectedState(briksWorkData)
          }
          calculateResult={() => this.calculateResult()}
          onWorkTypeSelect={() => this.onWorkTypeSelect()}
        />

        <div id="brick-wall-wrapper-id" className="brick-wall-wrapper">
          <WallSize
            onWallSiaeChangeState={(WallSizeData, gapSizeData) =>
              this.onWallSiaeChangeState({ WallSizeData, gapSizeData })
            }
            calculateResult={() => this.calculateResult()}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
