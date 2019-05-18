import React, { Component } from "react";
import Header from "./components/headerComponent";
import Menu from "./components/menuComponent";
import { BRIKS } from "./shared/briks";
import Production from "./components/productionComponent";
import AboutUs from "./components/aboutComponent";
import SpecialOffers from "./components/specialOffersComponent";
import Calculator from "./components/calculatorComponent";
import FeedbackForm from "./components/feedbackFormComponent";
import Scheme from "./components/schemeComponent";
import Footer from "./components/footerComponent";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      briks: BRIKS
    };
  }

  onSubmit = formData => {
    alert(
      `Привет ${formData.questionerName} 
    Нам очень важно что ты думаешь о ${formData.questionText}   
    `
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Production briks={this.state.briks} />
        <AboutUs />
        <SpecialOffers />
        <Calculator briks={this.state.briks} />
        <FeedbackForm onSubmit={formData => this.onSubmit(formData)} />
        <Scheme />
        <Footer />
      </div>
    );
  }
}

export default App;
