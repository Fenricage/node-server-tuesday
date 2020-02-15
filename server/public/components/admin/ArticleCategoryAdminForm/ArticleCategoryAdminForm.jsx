import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ArticleCategoryAdminForm.scss';

import {
  Field,
  FieldArray,
  reduxForm,
  change,
} from 'redux-form/immutable';

import Input from '../../../shared/components/Input/Input';
import SelectCustom from '../../../shared/components/SelectCustom/SelectCustom';

import patchArticleCategory from './dispatchControllers/patchArticleCategory';

class ArticleCategoryAdminForm extends Component {

  onHandleSubmitForm = () => {
    const { handleSubmit, match, query } = this.props;
    // if (match.params.id) {
    //   return handleSubmit(patchArticleCategory(match.params.id));
    // }
    if (query.id) {
      return handleSubmit(patchArticleCategory(query.id));
    }
    // return handleSubmit(createArticle);

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

ArticleCategoryAdminForm.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  // isCreating: PropTypes.bool.isRequired,
  // articleCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  // toOptionsTransformer: PropTypes.func.isRequired,
  // changeFieldValue: PropTypes.func.isRequired,
};

ArticleCategoryAdminForm.defaultProps = {

};

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
