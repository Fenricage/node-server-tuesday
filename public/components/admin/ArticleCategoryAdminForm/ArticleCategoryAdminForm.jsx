import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ArticleCategoryAdminForm.scss';

import {
  Field,
  reduxForm,
  change,
} from 'redux-form/immutable';

import Input from '../../../shared/components/Input/Input';

import patchArticleCategory from './dispatchControllers/patchArticleCategory';

class ArticleCategoryAdminForm extends Component {

  onHandleSubmitForm = () => {
    const { handleSubmit, query } = this.props;
    if (query.id) {
      return handleSubmit(patchArticleCategory(query.id));
    }
  }

  render() {
    const { isPatching } = this.props;

    return (
      <section className="b-article-category-admin-form">
        <form className="b-form" onSubmit={this.onHandleSubmitForm()}>
          <Field
            component={Input}
            className="b-form__block"
            name="name"
            type="text"
            title="Category Name"
            placeholder="Enter the category name..."
          />
          <Field
            component={Input}
            className="b-form__block"
            name="code"
            type="text"
            title="Code Name"
            placeholder="Enter the code name..."
          />
          <section className="b-form__block">
            <button type="submit" className="btn">{isPatching ? 'patching...' : 'Submit'}</button>
          </section>
        </form>
      </section>
    );
  }

}


const mapStateToProps = state => ({
  initialValues: state.getIn(['articleCategory', 'data']),
  isPatching: state.getIn(['articleCategory', 'isPatching']),
});

const mapDispatchToProps = dispatch => ({
  changeFieldValue: (form, field, value) => dispatch(change(form, field, value)),
});

const formConfiguration = {
  form: 'article-category-form',
  enableReinitialize: true,
};

ArticleCategoryAdminForm = reduxForm(formConfiguration)(ArticleCategoryAdminForm);
ArticleCategoryAdminForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleCategoryAdminForm);
export default ArticleCategoryAdminForm;
