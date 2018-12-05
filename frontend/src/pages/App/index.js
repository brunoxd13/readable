import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";

import { handleInitialData } from "../../store/actions/shared";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

import FloatingMenu from "../../components/FloatingMenu";
import HeaderMenu from "../../components/HeaderMenu";
import Router from "../../components/Router";

import "./styles.css";

class App extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div>
        <HeaderMenu />
        <div className="content-container">
          <div className="floating-menu-container">
            <FloatingMenu categories={this.props.categories} />
          </div>

          <div className="post-list-container">
            {isLoading ? (
              <Dimmer active>
                <Loader size="massive">Loading</Loader>
              </Dimmer>
            ) : (
              <Router />
            )}
          </div>
        </div>

        <ScrollUpButton />
      </div>
    );
  }
}

function mapStateToProps({ categories, posts, loading }) {
  return {
    categories: categories,
    posts: posts,
    isLoading: loading
  };
}

export default connect(mapStateToProps)(App);
