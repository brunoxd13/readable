import React, { Component } from "react";
import { connect } from "react-redux";
import { handleNewComment } from "../../store/actions/comments";

import { Form, TextArea } from "semantic-ui-react";

import "./styles.css";

class NewComment extends Component {
  state = {
    body: "",
    author: "guest"
  };

  handleComment = e => {
    this.setState({ body: e.target.value });
  };

  sendComment = () => {
    const comment = {
      body: this.state.body,
      author: this.state.author,
      parentId: this.props.postId
    };

    this.props.dispatch(handleNewComment(comment));
    this.setState({ body: "" });
  };

  render() {
    return (
      <div className="containet-form">
        <Form>
          <TextArea
            autoHeight
            placeholder="Comment..."
            onChange={this.handleComment}
            value={this.state.body}
          />

          <div className="containet-btn-comment">
            <Form.Button
              inverted
              color="blue"
              floated="right"
              onClick={this.sendComment}
            >
              Comment
            </Form.Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default connect()(NewComment);
