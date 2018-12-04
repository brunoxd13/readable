import React from "react";
import { Menu, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HeaderMenu = () => (
  <Menu stackable>
    <Menu.Item name="features">
      <Link to="/">Home</Link>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="testimonials">About</Menu.Item>

      <Menu.Item>
        <Header as="h6">
          <Icon name="user circle" circular />
          Guest
        </Header>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default HeaderMenu;
