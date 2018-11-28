import React, { Component } from "react";

import { connect } from "react-redux";
import { handleInitialData } from "../../store/actions/shared";

import FloatingMenu from "../../components/FloatingMenu";
import HeaderMenu from "../../components/HeaderMenu";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
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
function mapStateToProps({ categories, posts }) {
  return {
    categories: categories,
    posts: posts
  };
}

export default connect(mapStateToProps)(App);
