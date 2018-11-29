import React, { Component } from "react";
import { Menu, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class HeaderMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item name="features" onClick={this.handleItemClick}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="testimonials" onClick={this.handleItemClick}>
            About
          </Menu.Item>

          <Menu.Item name="sign-in" onClick={this.handleItemClick}>
            Sign-out
          </Menu.Item>

          <Menu.Item>
            <Header as="h6">
              <Icon name="user circle" circular />
              Udacity Student
            </Header>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderMenu;
