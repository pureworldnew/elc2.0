/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React from "react";
import ReactDOM from "react-dom";

import Menu from "./components/menu";
import Home from "./components/home";
import axios from "axios";

/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof App
   */
  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.state = {
        products: [],
    }
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  onSearchSubmit(term) {
    console.log("new search submit", term);
    axios
      .get(`http://localhost:3035?name=${term}`)
      .then((res) => {
        console.log("reads, ", res.data);
        this.setState({products: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
      console.log("this.state.products", this.state.products)
    return (
      <div className="App">
        <Menu onSearchSubmit={(term) => this.onSearchSubmit(term)} />
        <Home products={this.state.products}/>
      </div>
    );
  }
}

// Render this out
ReactDOM.render(<App />, document.getElementById("root"));
