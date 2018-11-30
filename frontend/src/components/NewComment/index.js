import React from "react";
import { Form, TextArea } from "semantic-ui-react";

import "./styles.css";

const NewComment = () => (
  <div className="containet-form">
    <Form>
      <TextArea autoHeight placeholder="Comment..." />

      <div className="containet-btn-comment">
        <Form.Button inverted color="blue" floated="right">
          Comment
        </Form.Button>
      </div>
    </Form>
  </div>
);

export default NewComment;
