import React, { Component } from "react";
import { Button, Icon, Input, Menu } from "semantic-ui-react";

export default class FloatingMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { categories } = this.props;

    return (
      <>
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

        <Button fluid inverted color="blue">
          New Post <Icon name="file alternate outline" />
        </Button>
      </>
    );
  }
}
