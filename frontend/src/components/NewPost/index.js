import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  TextArea,
  Input,
  Select,
  Segment
} from "semantic-ui-react";

import { handleAddPost, handleUpdatePost } from "../../store/actions/posts";

class NewPost extends Component {
  state = {
    title: "",
    category: "",
    body: "",
    author: "guest",
    isEditing: false
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        id: this.props.location.state.id,
        title: this.props.location.state.title,
        category: this.props.location.state.category,
        body: this.props.location.state.body,
        isEditing: true
      });
    }
  }

  handleFieldChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleAddPost = () => {
    if (this.state.isEditing) {
      let { id, title, body, category } = this.state;
      this.props.dispatch(handleUpdatePost(id, title, body, category));
    } else {
      this.props.dispatch(handleAddPost(this.state));
    }

    this.props.history.push("/");
  };

  render() {
    const categoriesPresent = Object.assign(
      [],
      Object.values(this.props.categories).map(c => {
        return { text: c.path, value: c.name };
      })
    );

    return (
      <Segment>
        <Form>
          <Form.Field
            name="title"
            control={Input}
            label="Title"
            placeholder="Title"
            onChange={this.handleFieldChange}
            value={this.state.title}
          />
          <Form.Field
            name="category"
            control={Select}
            options={categoriesPresent}
            label="Category"
            placeholder="Category"
            onChange={this.handleFieldChange}
            value={this.state.category}
          />
          <Form.Field
            autoHeight
            name="body"
            control={TextArea}
            label="Post"
            placeholder="Post"
            onChange={this.handleFieldChange}
            value={this.state.body}
          />

          <Button onClick={this.handleAddPost}>Submit</Button>
        </Form>
      </Segment>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
  };
}

export default connect(mapStateToProps)(NewPost);
