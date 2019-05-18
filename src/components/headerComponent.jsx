import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <div className="logo-first-line">
            <a href="#/">
              <span className="logo-first-line__first-letter">К</span>
              <span className="logo-first-line__second-letter">К</span>
              <span className="logo-first-line__third-letter">З</span>
            </a>
          </div>
          <div className="logo-second-line">Основан в 1967 году</div>
        </div>
        <div className="header-phones">
          <div className="header-phones-first-line">
            Камбаркский Кирпичный Завод
          </div>
          <div className="header-phones-second-line">
            тел. 8 (3443) 215-082
            <br />
            тел. 8 (3443) 215-083
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
