import React, { Component } from 'react';
import Immutable, { isImmutable, fromJS } from 'immutable';
import Debounce from 'awesome-debounce-promise';
import { connect } from 'react-redux';
import {
  Field,
  FieldArray,
  reduxForm,
  change,
} from 'redux-form/immutable';
import Input from '../../../shared/components/Input/Input';
import { searchArticles } from '../../../actions/articles';
import './HomeNavigationSearchForm.scss';

const debouncedSearchArticles = Debounce(searchArticles, 3000)


class HomeNavigationSearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }


  render() {

    const { handleSubmit } = this.props;

    return (
      <section className="home-navigation-search-form">
        <form
          action=""
          className="home-navigation-search-form__form"
          onSubmit={handleSubmit((values, dispatch) => {
            searchArticles(values)
              .then((articles) => {
                this.setState({
                  articles,
                });
              });
          })}
        >
          <Field
            component={Input}
            name="search"
            type="text"
            onChange={(e) => debouncedSearchArticles({search: e.target.value})}
            className="gray-form-row"
            placeholder="Enter the search request ..."
          />
        </form>
      </section>
    );
  }

}


const mapStateToProps = state => ({
  // initialValues: state.getIn(['article', 'data']),
  // isCreating: state.getIn(['article', 'isCreating']),
  // isPatching: state.getIn(['article', 'isPatching']),
});

const mapDispatchToProps = dispatch => ({
  changeFieldValue: (form, field, value) => dispatch(change(form, field, value)),
});

const formConfiguration = {
  form: 'search-form',
  enableReinitialize: true,
};

HomeNavigationSearchForm = reduxForm(formConfiguration)(HomeNavigationSearchForm);
HomeNavigationSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeNavigationSearchForm);
export default HomeNavigationSearchForm;
