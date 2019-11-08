import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TagsAdminForm.scss';
import { change, reduxForm, Field } from 'redux-form/immutable';

import Input from '../../../shared/components/Input/Input';
import Button from '../../../shared/components/Button/Button';

import createTags from './dispatchControllers/createTags';
import patchTag from './dispatchControllers/patchTag';

class TagsAdminForm extends Component {

  constructor(props) {
    super(props);

  }


  componentDidUpdate(prevProps, prevState) {
    const {
      selectedTag: prevSelectedTag,
    } = prevProps;

    const {
      selectedTag,
      changeFieldValue,
      form,
    } = this.props;

    // ресетим или сетим новое значени в поле при изменение стейта выделенного тега
    if (prevSelectedTag !== selectedTag) {
      console.log('selectedTag', selectedTag);
      if (selectedTag.get('code')) {
        changeFieldValue(form, 'tags', selectedTag.get('code'));
      } else {
        changeFieldValue(form, 'tags', '');
      }
    }
  }


  onHandleSubmitForm = () => {
    const {
      handleSubmit,
      updateTags,
      selectedTag,
    } = this.props;

    if (selectedTag.size) {
      // здесь передаем коллбек в ф-ию для того чтобы обновить теги после патча тега
      return handleSubmit(patchTag(updateTags, selectedTag.get('_id')));
    }
    // то же самое только после создагия
    return handleSubmit(createTags(updateTags));

  }

  render() {
    const {
      isCreating,
      selectedTag,
      unsetSelectedTag,
    } = this.props;
    return (
      <form className="tags-admin-form" onSubmit={this.onHandleSubmitForm()}>
        <Field
          component={Input}
          name="tags"
          placeholder="Введите теги через запятую ..."
          className="gray-form-row"
          type="text"
          optionalButtonText={selectedTag.size ? 'вернуться в режим создания' : null}
          optionalButtonHandler={selectedTag.size ? unsetSelectedTag : null}
        />
        <Button
          type="submit"
          className="btn"
          isLoading={isCreating}
        >
          Submit
        </Button>
      </form>
    );
  }

}

const mapStateToProps = state => ({
  // initialValues: state.article.data,
  isCreating: state.getIn(['tags', 'isCreating']),
  // isPatching: state.article.isPatching,
});

const mapDispatchToProps = dispatch => ({
  changeFieldValue: (form, field, value) => dispatch(change(form, field, value)),
});

const formConfiguration = {
  form: 'tags-form',
  enableReinitialize: true,
};

TagsAdminForm = reduxForm(formConfiguration)(TagsAdminForm);
TagsAdminForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagsAdminForm);
export default TagsAdminForm;
