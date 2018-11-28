import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/categories";

import FloatingMenu from "../../components/FloatingMenu";
import HeaderMenu from "../../components/HeaderMenu";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <div>
        <HeaderMenu />
        <FloatingMenu categories={this.props.categories} />
      </div>
    );
  }
}
function mapStateToProps({ categories }) {
  return {
    categories: categories
  };
}

export default connect(mapStateToProps)(App);
