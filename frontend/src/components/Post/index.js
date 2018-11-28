import React, { Component } from "react";
import { Button, Icon, Divider, Item, Label } from "semantic-ui-react";
import { truncateString } from "../../service/utils";

import "./styles.css";

class Post extends Component {
  render() {
    const { post, isOnly } = this.props;

    return (
      <div className="group-container">
        <Item.Group>
          <Item key={post.id}>
            <Item.Content>
              <Item.Header as="a">{post.title}</Item.Header>

              <Item.Meta>
                <span>
                  <Icon name="user circle" />
                  {post.author}
                </span>

                <span>
                  <Icon name="comment" />
                  {post.commentCount}
                </span>
              </Item.Meta>

              <Item.Description>
                {!isOnly ? truncateString(post.body, 200) : post.body}
              </Item.Description>

              <Label>{post.category}</Label>

              <Divider />

              <Item.Extra>
                <Button.Group>
                  <Button icon="thumbs up outline" />
                  <Button.Or text={post.voteScore} />
                  <Button icon="thumbs down outline" />
                </Button.Group>

                {!isOnly && (
                  <Button secondary floated="right">
                    Continue Reading
                    <Icon name="right chevron" />
                  </Button>
                )}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}

export default Post;
