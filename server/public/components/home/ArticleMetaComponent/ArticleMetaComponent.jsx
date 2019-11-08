import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import CodeBlock from 'Shared/components/CodeBlock/CodeBlock';
import './ArticleMetaComponent.scss';


class ArticleMetaComponent extends Component {

  constructor(props) {
    super(props);

    this.generatedNode = {
      link: elProps => <a href={elProps.href} className="markdown__link">{elProps.children}</a>,
      root: elProps => <section className="markdown">{elProps.children}</section>,
      // text: elProps => <p className="markdown__text">{elProps.children}</p>,
      paragraph: elProps => <p className="markdown__paragraph">{elProps.children}</p>,
      heading: ({ level, children }) => {

        const tagName = `h${level}`;
        return React.createElement(
          tagName, { className: `markdown__h${level}` },
          children,
        );
      },
      inlineCode: elProps => <code className="markdown__inline-code">{elProps.children}</code>,
      blockquote: elProps => <blockquote className="markdown__blockquote">{elProps.children}</blockquote>,
      code: CodeBlock,
    };
  }


  render() {
    const { data } = this.props;

    let currentComponent = null;

    switch (data.get('type')) {
      case 'attachment':
        currentComponent = (
          <img className="article-detail-page__img" src={data.getIn(['value', 'url'])} alt="" />
        );
        break;
      case 'markdown':
        currentComponent = (
          <ReactMarkdown
            source={data.get('value')}
            className="article-detail-page__md markdown"
            escapeHtml={false}
            renderers={this.generatedNode}
          />
        );
        break;
      default:
        currentComponent = null;
    }

    return (
      <Fragment>
        { currentComponent }
      </Fragment>
    );
  }

}

export default ArticleMetaComponent;
