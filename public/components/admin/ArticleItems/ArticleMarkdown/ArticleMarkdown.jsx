import React, { Component } from 'react';
import './ArticleMarkdown.scss';
import {
  Field,
} from 'redux-form/immutable';
import Markdown from '../../../../shared/components/Markdown/Markdown';

class ArticleMarkdown extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const { field } = this.props;

    return (
      <section>
        <Field
          name={`${field}.value`}
          component={Markdown}
        />
      </section>
    );
  }

}

export default ArticleMarkdown;
