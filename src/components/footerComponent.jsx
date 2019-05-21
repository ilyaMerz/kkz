import React, { Component } from "react";
import { YMInitializer } from "react-yandex-metrika";

class Footer extends Component {
  state = {};

  render() {
    return (
      <footer className="footer">
        <div className="footer__copyright">
          <p>&#169; 2019 ООО "ККЗ"</p>
        </div>
        <div className="footer__law-text">
          Предложения, размещенные на данном сайте не являются публичной офертой
          согласно ст.401 ГК РФ, информация о ценах и товарах носит справочный
          характер.
        </div>
        <div className="footer___address">
          <p>Камбаркинский кирпичный завод</p>
          <p>
            Индекс: 155 323 Удмуртская Республика, г.Камбарка, ул. Кирова вл.
            255
          </p>
          <p>
            тел. <a href="tel: 89999988888s8s8">8 (4632) 261-04</a>
          </p>
        </div>
        <div className="ym">
          <YMInitializer
            accounts={[53737435]}
            options={{ webvisor: true, defer: true }}
            version="2"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
