import React, { Component } from 'react';
import './Markdown.scss';
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown/with-html';
import CodeBlock from '../CodeBlock/CodeBlock';
import 'react-mde/lib/styles/css/react-mde-all.css';

class Markdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'write',
    };
  }

  handleValueChange = (value) => {
    const { input } = this.props;
    input.onChange(value);
  };

  handleTabChange = (tab) => {
    this.setState({ tab });
  };


  render() {
    const { input, meta } = this.props;

    return (
      <section>
        <ReactMde
          onChange={this.handleValueChange}
          value={input.value || ''}
          onTabChange={this.handleTabChange}
          selectedTab={this.state.tab}
          generateMarkdownPreview={markdown => Promise.resolve(
            <ReactMarkdown
              source={input.value || ''}
              escapeHtml={false}
              renderers={{ code: CodeBlock }}
            />,
          )
          }
        />
      </section>
    );
  }

}

export default Markdown;
