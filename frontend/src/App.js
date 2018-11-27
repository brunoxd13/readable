import React, { Component } from "react";
import FloatingMenu from "./components/FloatingMenu";
import HeaderMenu from "./components/HeaderMenu";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMenu />
        <FloatingMenu />
      </div>
    );
  }
}

export default App;
