import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Button,
  Form,
  TextArea,
  Input,
  Select,
  Segment,
  Grid
} from "semantic-ui-react";

import { handleAddPost, handleUpdatePost } from "../../store/actions/posts";

class NewPost extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired
  };

  state = {
    title: "",
    category: "",
    body: "",
    author: this.props.authedUser,
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
    const { id, title, body, category } = this.state;

    if (title === "" || body === "" || category === "") {
      return;
    }

    if (this.state.isEditing) {
      this.props.handleUpdatePost(id, title, body, category);
    } else {
      this.props.handleAddPost(this.state);
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

          <Grid>
            <Grid.Column width={16}>
              <Button
                inverted
                color="blue"
                floated="right"
                onClick={this.handleAddPost}
              >
                Submit
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

function mapStateToProps({ categories, authedUser }) {
  return {
    categories: categories,
    authedUser: authedUser
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleAddPost, handleUpdatePost }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
