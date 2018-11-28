import React, { Component } from "react";
import { Icon, Input, Menu } from "semantic-ui-react";

import "./styles.css";

export default class FloatingMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { categories } = this.props;

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
              {Object.values(categories).map(category => (
                <Menu.Item
                  key={category.path}
                  name={category.path}
                  active={activeItem === category.path}
                  onClick={this.handleItemClick}
                >
                  {category.name}
                </Menu.Item>
              ))}
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
