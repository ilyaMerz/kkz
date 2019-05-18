import React, { Component } from "react";

class Production extends Component {
  state = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true
  };

  handleToggle = e => {
    this.setState({
      [e.target.parentElement.id]: !this.state[e.target.parentElement.id]
    });
  };

  render() {
    const cards = this.props.briks.map(brick => {
      return (
        <div
          id={brick.id}
          name={brick.id}
          key={brick.id}
          onClick={e => this.handleToggle(e)}
          className="production-card"
        >
          <div
            className={
              this.state[brick.id] === true
                ? "card__header"
                : "card__header open"
            }
          >
            {brick.title}
          </div>
          <div
            className={this.state[brick.id] === true ? "hide-area" : " "}
            id={brick.id}
          >
            <div className="card__image">
              <img
                style={{ width: 180, height: 180 }}
                src={brick.img}
                alt={brick.title}
              />
            </div>
            <div className="card__price">{brick.price} руб/шт.</div>
            <div className="card__description">{brick.descr} руб/шт.</div>
          </div>
        </div>
      );
    });
    return (
      <div id="ourBriks" className="production">
        <h2 className="production__header subheader ">Наша продукция</h2>
        <div className="production__cards">{cards}</div>
      </div>
    );
  }
}

export default Production;
