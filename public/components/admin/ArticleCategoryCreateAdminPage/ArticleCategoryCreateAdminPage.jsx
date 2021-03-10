import React, { Component } from 'react';
import ArticleCategoryAdminForm from '../ArticleCategoryAdminForm/ArticleCategoryAdminForm';
import './ArticleCategoryCreateAdminPage.scss';
import PropTypes from 'prop-types';
import { reqArticleCategoryAndSet } from '../../../actions/articleCategory';
import { connect } from 'react-redux';

class ArticleCategoryCreateAdminPage extends Component {


  componentDidMount() {
    this.onUpdateArticleCategory();
  }


  onUpdateArticleCategory = () => {
    const {
      query,
      reqArticleCategoryAndSetDispatch,
    } = this.props;

    if (query.id) {
      reqArticleCategoryAndSetDispatch(query.id);
    } else {
      //
    }

  };

  render() {
    const { isLoadedArticleCategory, match, query } = this.props;

    if (!isLoadedArticleCategory) {
      return <p>Loading ...</p>;
    }

    return (
      <section>
        <h1>Create/Edit Article Category</h1>
        <ArticleCategoryAdminForm
          query={query}
          match={match}
        />
      </section>
    );
  }

}

ArticleCategoryCreateAdminPage.propTypes = {
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  isLoadedArticleCategory: state.getIn([ 'articleCategory', 'isLoaded' ]),
});

const mapDispatchToProps = (dispatch) => ({
  reqArticleCategoryAndSetDispatch: (id) => dispatch(reqArticleCategoryAndSet(id)),
});

export default
connect(mapStateToProps, mapDispatchToProps)(ArticleCategoryCreateAdminPage);
