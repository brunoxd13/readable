import React from "react";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["categories"]}
        mode="inline"
      >
        <SubMenu
          key="categories"
          title={
            <span>
              <Icon type="appstore" />
              <span>Categories</span>
            </span>
          }
        >
          <Menu.Item key="1">All</Menu.Item>
          <Menu.Item key="2">React</Menu.Item>
          <Menu.Item key="3">Redux</Menu.Item>
          <Menu.Item key="4">Udacity</Menu.Item>
        </SubMenu>

        {/* <SubMenu
          key="fav"
          title={
            <span>
              <Icon type="star" />
              <span>Favorites</span>
            </span>
          }
        >
          <Menu.Item key="1">ads</Menu.Item>
          <Menu.Item key="2">React</Menu.Item>
          <Menu.Item key="3">Redux</Menu.Item>
          <Menu.Item key="4">Udacity</Menu.Item>
        </SubMenu> */}
      </Menu>
    );
  }
}

export default Sider;
