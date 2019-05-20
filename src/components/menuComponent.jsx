import React, { Component } from "react";

class Menu extends Component {
  state = {
    links: [
      {
        id: 0,
        url: "#ourBriks",
        text: "Hаш кирпич"
      },
      {
        id: 1,
        url: "#scheme",
        text: "Схема проезда"
      },
      {
        id: 2,
        url: "#calc",
        text: "Расчитать"
      },
      {
        id: 3,
        url: "#aboutus",
        text: "О компании"
      },
      {
        id: 4,
        url: "#form",
        text: "Свяжитесь"
      }
    ]
  };

  hiddener = e => {
    document.getElementById("nav-menu-hamburger").classList.toggle("hidden");
    document.getElementById("two").classList.toggle("open");
    document.getElementById("one").classList.toggle("open");
    document.getElementById("three").classList.toggle("open");
  };

  render() {
    const menu = this.state.links.map(link => {
      return (
        <div key={link.id}>
          <li className="nav-menu__item-li">
            <a className="nav-menu__item__link-a" href={link.url}>
              {link.text}
            </a>
          </li>
        </div>
      );
    });

    const menuDrop = this.state.links.map(link => {
      return (
        <div key={link.id}>
          <li className="dropdown__nav-menu__item-li">
            <a
              onClick={e => this.hiddener(e)}
              className="dropdown__nav-menu__item__link-a"
              href={link.url}
            >
              {link.text}
            </a>
          </li>
        </div>
      );
    });

    return (
      <nav className="nav">
        <ul className="nav-menu-ul ">
          {menu}
          <div className="nav-menu__hamburger" onClick={e => this.hiddener(e)}>
            <div className="nav-menu__hamburger__line-wrapper">
              <div
                id="one"
                className="nav-menu__hamburger__inner-line line-one"
              />
              <div
                id="two"
                className="nav-menu__hamburger__inner-line line-two"
              />
              <div
                id="three"
                className="nav-menu__hamburger__inner-line line-three"
              />
            </div>
          </div>
        </ul>
        <div id="nav-menu-hamburger" className="nav-menu__dropdown hidden">
          <ul className="dropdown__nav-menu-ul">{menuDrop}</ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
