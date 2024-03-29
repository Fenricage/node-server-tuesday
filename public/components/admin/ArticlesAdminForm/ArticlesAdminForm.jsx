import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ArticlesAdminForm.scss';
import { connect } from 'react-redux';
import Immutable, { isImmutable, fromJS } from 'immutable';

import {
  Field,
  FieldArray,
  reduxForm,
  change,
} from 'redux-form/immutable';

import RenderArticleItems from '../RenderArticleItems/RenderArticleItems';
import Input from '../../../shared/components/Input/Input';
import Button from '../../../shared/components/Button/Button';
import TagList from '../../../shared/components/TagList/TagList';
import SelectCustom from '../../../shared/components/SelectCustom/SelectCustom';
import Attachment from '../../../shared/components/Attachment/Attachment';

import createArticle from './dispatchControllers/createArticle';
import patchArticle from './dispatchControllers/patchArticle';

class ArticlesAdminForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCategoryToggledToInput: false,
      articlePreviewType: null,
    };
  }


  toServerDataOptionsTransformArticleCategories = item => (
    {
      _id: item.value,
      name: item.label,
    }
  )

  toSelectFormatArticleCategoriesTransform = (item) => {

    let immutableItem = item;

    if (!isImmutable(item)) {
      immutableItem = fromJS(item);
    }

    return {
      value: immutableItem.get('_id'),
      label: immutableItem.get('name'),
    };
  }

  onActivateOptionalControllerHandler = () => {
    const { changeFieldValue } = this.props;
    changeFieldValue('articles-form', 'category', '');
    this.setState({ isCategoryToggledToInput: !this.state.isCategoryToggledToInput });
  }

  onHandleSubmitForm = () => {
    const { handleSubmit, query } = this.props;
    // TODO говнокод пофиксь
    if (query.id !== 'create') {
      return handleSubmit(patchArticle(query.id));
    }
    return handleSubmit(createArticle);

  }


  render() {

    const {
      handleSubmit,
      isCreating,
      isPatching,
      articleCategories,
      toOptionsTransformer,
      tags,
    } = this.props;

    const { isCategoryToggledToInput, articlePreviewType } = this.state;

    const articleCategoriesOptions = toOptionsTransformer(articleCategories);

    return (
      <section
        className="articles-admin-form"
      >
        <form
          className="b-form"
          onSubmit={this.onHandleSubmitForm()}
        >
          <Field
            component={Input}
            className="b-form__block articles-admin-form__input-row"
            name="title"
            type="text"
            title="Title"
            placeholder="Enter the title ..."
          />
          <Field
            component={Input}
            className="b-form__block articles-admin-form__input-row"
            name="preview_text"
            type="text"
            title="Preview Text"
            placeholder="Enter the preview text ..."
          />
          <FieldArray
            tags={tags}
            name="tags"
            component={TagList}
          />
          {
            !isCategoryToggledToInput ? (
              <Field
                options={articleCategoriesOptions}
                toServerDataTransform={this.toServerDataOptionsTransformArticleCategories}
                toSelectFormatValuesTransform={this.toSelectFormatArticleCategoriesTransform}
                optionalButtonText="toggle to input"
                optionalButtonHandler={this.onActivateOptionalControllerHandler}
                component={SelectCustom}
                className="b-form__block"
                name="category"
                title="Category"
                placeholder="Enter the title ..."
              />
            ) : (
              <Field
                component={Input}
                className="b-form__block"
                optionalButtonText="toggle to select"
                optionalButtonHandler={this.onActivateOptionalControllerHandler}
                name="category"
                type="text"
                title="Category"
                placeholder="Enter the category ..."
              />
            )
          }
          <button type="button" onClick={() => this.setState({ articlePreviewType: 'articlePreviewBlog' })}>set type to blog</button>
          <Attachment
            name="preview_img"
            type={articlePreviewType || 'articlePreview'}
          />
          <FieldArray
            name="articles_meta"
            component={RenderArticleItems}
          />
          <section className="b-form__block">
            <Button
              type="submit"
              className="btn"
              isLoading={isCreating || isPatching}
            >
              Submit
            </Button>
          </section>
        </form>
      </section>
    );
  }

}

ArticlesAdminForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isCreating: PropTypes.bool.isRequired,
  articleCategories: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.instanceOf(Immutable.Iterable),
  ]).isRequired,
  toOptionsTransformer: PropTypes.func.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
};

ArticlesAdminForm.defaultProps = {

};

const mapStateToProps = state => ({
  initialValues: state.getIn(['article', 'data']),
  isCreating: state.getIn(['article', 'isCreating']),
  isPatching: state.getIn(['article', 'isPatching']),
});

const mapDispatchToProps = dispatch => ({
  changeFieldValue: (form, field, value) => dispatch(change(form, field, value)),
});

const formConfiguration = {
  form: 'articles-form',
  enableReinitialize: true,
};

ArticlesAdminForm = reduxForm(formConfiguration)(ArticlesAdminForm);
ArticlesAdminForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticlesAdminForm);
export default ArticlesAdminForm;
