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
import { handleAddPost } from "../../store/actions/posts";

class NewPost extends Component {
  state = {
    title: "",
    category: "",
    body: "",
    author: "guest"
  };

  handleFieldChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleAddPost = () => {
    this.props.dispatch(handleAddPost(this.state));
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
          />
          <Form.Field
            name="category"
            control={Select}
            options={categoriesPresent}
            label="Category"
            placeholder="Category"
            onChange={this.handleFieldChange}
          />
          <Form.Field
            autoHeight
            name="body"
            control={TextArea}
            label="Post"
            placeholder="Post"
            onChange={this.handleFieldChange}
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
