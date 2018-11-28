import React, { Component } from "react";
import { Button, Icon, Divider, Item, Label } from "semantic-ui-react";

import "./styles.css";

class PostList extends Component {
  posts = () =>
    Object.values(this.props.posts).map(post => {
      return (
        <div className="group-container">
          <Item.Group>
            <Item key={post.id}>
              <Item.Content>
                <Item.Header as="a">{post.title}</Item.Header>
                <Item.Meta>
                  <span>{post.author}</span>
                </Item.Meta>
                <Item.Description>{post.body}</Item.Description>
                <Label>{post.category}</Label>
                <Divider />
                <Item.Extra>
                  <Button.Group>
                    <Button color="green" icon="thumbs up outline" />
                    <Button.Or text={post.voteScore} />
                    <Button color="red" icon="thumbs down outline" />
                  </Button.Group>

                  <Button primary floated="right">
                    Continue Reading
                    <Icon name="right chevron" />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
      );
    });

  render() {
    return this.posts();
  }
}

export default PostList;
