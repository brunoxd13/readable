import React, { Component } from "react";
import { Icon, Input, Menu } from "semantic-ui-react";

import "./styles.css";

export default class FloatingMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="menu-vertical-container">
        <Menu vertical>
          <Menu.Item>
            <Input placeholder="Search..." />
          </Menu.Item>

          <Menu.Item>
            Categories
            <Icon name="grid layout" />
            <Menu.Menu>
              <Menu.Item
                name="search"
                active={activeItem === "search"}
                onClick={this.handleItemClick}
              >
                Search
              </Menu.Item>
              <Menu.Item
                name="add"
                active={activeItem === "add"}
                onClick={this.handleItemClick}
              >
                Add
              </Menu.Item>
              <Menu.Item
                name="about"
                active={activeItem === "about"}
                onClick={this.handleItemClick}
              >
                Remove
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
