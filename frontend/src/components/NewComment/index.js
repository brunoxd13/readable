import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleAddComment } from "../../store/actions/comments";

import { Form, TextArea } from "semantic-ui-react";

import "./styles.css";

class NewComment extends Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
    authedUser: PropTypes.string.isRequired
  };

  state = {
    body: "",
    author: this.props.authedUser
  };

  handleComment = e => {
    this.setState({ body: e.target.value });
  };

  sendComment = () => {
    if (this.state.body === "") {
      return;
    }

    const comment = {
      body: this.state.body,
      author: this.state.author,
      parentId: this.props.postId
    };

    this.props.dispatch(handleAddComment(comment));
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

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser
  };
}

export default connect(mapStateToProps)(NewComment);
