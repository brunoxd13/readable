import React, { Component } from "react";
import { Menu, Icon, Header } from "semantic-ui-react";

export default class HeaderMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item
          name="features"
          active={activeItem === "features"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="testimonials"
            active={activeItem === "testimonials"}
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>

          <Menu.Item
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={this.handleItemClick}
          >
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
