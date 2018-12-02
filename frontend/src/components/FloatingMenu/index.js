import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Input, Menu } from "semantic-ui-react";
import { sortBy, sortByCategory } from "../../store/actions/sort";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../service/utils";

class FloatingMenu extends Component {
  state = {
    activeItem: "all"
  };

  handleItemClick = (e, { name }) => {
    let type = name.split("-")[0];
    name = name.split("-")[1];

    if (type === "category") {
      this.setState({ activeItem: name });
      this.props.dispatch(sortByCategory(name));
    } else {
      this.props.dispatch(sortBy(name));
    }
  };

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
              <Menu.Item
                as={Link}
                to={"/"}
                key={"all"}
                name={"category-all"}
                active={activeItem === "all"}
                onClick={this.handleItemClick}
              >
                All Posts
              </Menu.Item>

              {Object.values(categories).map(category => (
                <Menu.Item
                  as={Link}
                  to={`/${category.path}`}
                  key={category.path}
                  name={`category-${category.path}`}
                  active={activeItem === category.path}
                  onClick={this.handleItemClick}
                >
                  {capitalizeFirstLetter(category.name)}
                </Menu.Item>
              ))}
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            Sort By
            <Icon name="sort amount down" />
            <Menu.Menu>
              <Menu.Item
                key="newest"
                name="order-newest"
                onClick={this.handleItemClick}
              >
                Newest
              </Menu.Item>
              <Menu.Item
                key="oldest"
                name="order-oldest"
                onClick={this.handleItemClick}
              >
                Oldest
              </Menu.Item>
              <Menu.Item
                key="famous"
                name="order-famous"
                onClick={this.handleItemClick}
              >
                Most Rated
              </Menu.Item>
              <Menu.Item
                key="infame"
                name="order-infame"
                onClick={this.handleItemClick}
              >
                Less Rated
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>

        <Link to="/new-post">
          <Button fluid inverted color="blue">
            New Post
          </Button>
        </Link>
      </>
    );
  }
}

export default connect()(FloatingMenu);
