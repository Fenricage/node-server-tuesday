import React, { Component } from 'react';
import * as ArticleComponents from '../ArticleItems/index';
import RemoveArticleItem from '../RemoveArticleItem/RemoveArticleItem';
import './ArticleComponent.scss';

class ArticleComponent extends Component {

  render() {
    const {
      currentField,
      fields,
      field,
      indexItem,
      ...other
    } = this.props;
    const CurrentArticleComponent = ArticleComponents[currentField.get('component')];
    return (
      <section className="article-component">
        <CurrentArticleComponent
          currentField={currentField}
          field={field}
          {...other}
        />
        <RemoveArticleItem onClickHandler={() => fields.remove(indexItem)} />
      </section>
    );
  }

}

export default ArticleComponent;
