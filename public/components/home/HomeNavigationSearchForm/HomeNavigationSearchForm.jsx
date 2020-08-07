import React, { Component } from 'react';
import Immutable, { isImmutable, fromJS, List } from 'immutable';
import cs from 'classnames';
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


const resetArticles = () => new Promise((resolve, reject) => {
  resolve(true);
});

const debouncedResetArticles = Debounce(resetArticles, 500);
const debouncedSearchArticles = Debounce(searchArticles, 500);

const MIN_CHARS_FOR_REQ = 3;

class HomeNavigationSearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }

  handleSetFocusState = (status) => {
    this.setState({
      isFocused: status,
    })
  };

  handleChangeSearch = (e) => {

    const {
      setArticlesLoadingStatus,
      setArticlesData,
      setLastSearchQuery,
    } = this.props;

    // на каждое изменение сетим лоадер
    setArticlesLoadingStatus(true);

    // проверяем длину на момент onChange
    if (e.target.value.length >= MIN_CHARS_FOR_REQ) {

      const search = e.target.value;

      return debouncedSearchArticles(
        fromJS({ search }),
      )
        .then((articles) => {
          // еще раз проверяем длину после выполнения асинхронного запроса
          if (e.target.value.length >= MIN_CHARS_FOR_REQ) {
            setArticlesData(fromJS(articles));
            setLastSearchQuery(search);
            setArticlesLoadingStatus(false);
          }
        });
    }


    // TODO(@fenricage): сделать проверку на предыдущие значения
    // лоадер не должен появляться если предыдущая длина была меньше MIN_CHARS_FOR_REQ
    // выполнится если длина меньше 3
    debouncedResetArticles()
      .then(() => {
        if (e.target.value.length < MIN_CHARS_FOR_REQ) {
          setArticlesData(new List());
          setArticlesLoadingStatus(false);
        }
      });

  };


  render() {

    const {
      handleSubmit,
      setArticlesLoadingStatus,
      setArticlesData,
      isLoading,
    } = this.props;

    const { isFocused } = this.state;

    return (
      <section className={cs({
        "home-navigation-search-form": true,
      })}>
        <form
          action=""
          className={
            cs({
              'home-navigation-search-form__form': true,
            })
          }
          // onSubmit={handleSubmit((values, dispatch) => {
          //   searchArticles(values)
          //     .then((articles) => {
          //       this.setState({
          //         articles,
          //       });
          //     });
          // })}
        >
          <Field
            component={Input}
            name="search"
            type="text"
            onChange={this.handleChangeSearch}
            onFocus={() => this.handleSetFocusState(true)}
            onBlur={() => this.handleSetFocusState(false)}
            className={cs({
              'home-navigation-search-form__search-input': true,
            })}
            placeholder="Поиск"
          />
          <div className={cs({
            'home-navigation-search-form__input-border': true,
            'home-navigation-search-form__input-border_is-hidden': isLoading,
            'home-navigation-search-form__input-border_is-focused': isFocused,
          })}
          />
          <div className={cs({
            'home-navigation-search-form__input-loader': true,
            'home-navigation-search-form__input-loader_is-loading': isLoading,
            'home-navigation-search-form__input-loader_is-focused': isFocused,
          })}
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
