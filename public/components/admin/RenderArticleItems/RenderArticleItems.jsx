import React, { Component, Fragment } from 'react';

import { fromJS } from 'immutable';
import Button from '../../../shared/components/Button/Button';
import ArticleComponent from '../ArticleComponent/ArticleComponent';

import './RenderArticleItems.scss';


class RenderArticleItems extends Component {

  constructor(props) {
    super(props);
    this.addButtons = [
      {
        style:
          {
            backgroundColor: '#007bff',
            backgroundImage: 'radial-gradient(at left bottom, rgb(212, 174, 117), rgb(255, 0, 140) 100%)',
            backgroundSize: '200% 200%',
          },
        className: 'btn is-small is-bordered is-bgmoving',
        type: 'paragraph',
        component: 'ArticleParagraph',
        content: (<Fragment>
          Add Paragraph
          <span className="plus">&#43;</span>
        </Fragment>),
      },
      {
        style:
          {
            backgroundColor: '#007bff',
            backgroundImage: 'radial-gradient(at left bottom, rgb(143, 205, 224) 0%, rgb(32, 95, 160) 100%)',
            backgroundSize: '200% 200%',
          },
        className: 'btn is-small is-bordered is-bgmoving',
        type: 'attachment',
        component: 'ArticleAttachment',
        content: (<Fragment>
          Add Attachment
          <span className="plus">&#43;</span>
        </Fragment>),
      },
      {
        style:
          {
            backgroundColor: '#007bff',
            backgroundImage: 'radial-gradient(at left bottom, rgb(197, 132, 218) 0%, rgb(117, 32, 160) 100%)',
            backgroundSize: '200% 200%',
          },
        className: 'btn is-small is-bordered is-bgmoving',
        type: 'markdown',
        component: 'ArticleMarkdown',
        content: (<Fragment>
          Add Markdown
          <span className="plus">&#43;</span>
        </Fragment>),
      },
    ];
  }


  render() {
    const { fields } = this.props;
    return (
      <section className="render-article-items">
        {
          fields.map((field, index) => {

            const currentField = fields.get(index);

            return (
              <ArticleComponent
                currentField={currentField}
                indexItem={index}
                key={index}
                field={field}
                fields={fields}
                {...this.props}
              />
            );
          })
        }

        <section className="render-article-items__add-buttons">
          {
            this.addButtons.map(({
              component, type, content, ...other
            }, index) => (
              <Button
                key={index}
                onClick={() => fields.push(fromJS({
                  type,
                  component,
                }))}
                type="button"
                {...other}
              >
                {content}
              </Button>
            ))
          }
        </section>
      </section>
    );
  }

}

export default RenderArticleItems;
