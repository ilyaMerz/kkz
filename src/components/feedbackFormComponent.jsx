import React, { Component } from "react";

class FeedbackForm extends Component {
  state = {
    questionType: " ",
    questionerName: " ",
    questionerData: " ",
    questionText: " "
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      questionType: " ",
      questionerName: " ",
      questionerData: " ",
      questionText: " "
    });
    this.props.onSubmit(this.state);
    document.getElementById("mySubmitButton").innerHTML = "Отправлено &#x2714;";
  };

  render() {
    // const element = <FontAwesomeIcon icon={faCoffee} />;
    return (
      <div id="form" className="feedback-form">
        <h2 className="subheader feedback-form__subheader">Свяжитесь с нами</h2>

        <div className="feedback-form__form-wrapper">
          <br />
          <form className="feedback-form__form" id="question_select" action="">
            <label className="label" htmlFor="question_select">
              Ваш вопрос:
            </label>
            <br />
            <select
              className="feedback-form__form__question-select"
              name="questionType"
              id="feedback-form__form__question-select"
              value={this.state.questionType}
              onChange={e => this.change(e)}
            >
              <option value="buying">Приобретение кирпича</option>
              <option value="delivery">Доставка</option>
              <option value="documentation">Документация</option>
              <option value="others">Другое</option>
            </select>
            <br />
            <label className="label" htmlFor="yourName">
              Представьтесь пожалуйста
            </label>
            <input
              type="text"
              id="yourName"
              name="questionerName"
              value={this.state.questionerName}
              onChange={e => this.change(e)}
            />
            <br />
            <label className="label" htmlFor="questionerData">
              Как с вами связаться
            </label>
            <input
              id="questionerData"
              type="text"
              name="questionerData"
              value={this.state.questionerData}
              onChange={e => this.change(e)}
              // placeholder="Как с вами связаться (телефон, email)"
            />
            <br />
            <label className="label" htmlFor="questionText">
              Ваше сообщение:
            </label>
            <textarea
              className="feedback-form__form-question-text-area"
              id="questionText"
              type="text"
              name="questionText"
              value={this.state.questionText}
              placeholder="Ваше сообщение"
              onChange={e => this.change(e)}
            />
            <br />

            <button
              id="mySubmitButton"
              className="feedback-form__form__submit-button"
              onClick={e => this.onSubmit(e)}
            >
              Отправить
            </button>
          </form>
        </div>
        <div className="feedback-form__contacts">
          <div className="feedback-form__contacts__subheader">
            Камбаркинский кирпичный завод
          </div>
          <p>155 323 Удмуртская Республика, г.Камбарка,</p>
          <p>ул. Кирова вл. 255</p>
          <p>тел. 8 (3443) 215-082</p>
          <p>тел. 8 (3443) 215-083</p>
        </div>
      </div>
    );
  }
}

export default FeedbackForm;
