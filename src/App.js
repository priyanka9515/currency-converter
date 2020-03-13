import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Home from "./components/Home";

class App extends Component {
  state = {
    items: [],
    currency: "INR"
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items) {
      let prices = [];
      prices.push("empty");
      return { items: nextProps.items };
    }
    return null;
  }

  handleChange = event => {
    const { name, value } = event.target;
    let fromCurrency = value === "INR" ? "USD" : "INR";
    axios
      .get(
        `https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${value}`
      )
      .then(response => {
        // const result =
        //   this.state.amount * response.data.rates[this.state.toCurrency];
        // this.setState({ result: result.toFixed(5) });
        this.setState({ [name]: value });

        let exchangePrice = response.data.rates[value].toFixed(5);

        let { items } = this.state;

        items.map(ele => (ele.price = (exchangePrice * ele.price).toFixed(5)));

        this.setState({ items });
      })
      .catch(error => {
        console.log("Opps", error.message);
      });
  };

  render() {
    return (
      <div>
        <h2>
          <span>Converter</span>
        </h2>
        <select
          name="currency"
          onChange={this.handleChange}
          value={this.state.currency}
        >
          <option key="INR">INR</option>
          <option key="USD">USD</option>
        </select>
        <Home items={this.state.items} currency={this.state.currency} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(App);
