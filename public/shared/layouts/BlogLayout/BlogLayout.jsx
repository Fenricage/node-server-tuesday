import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../../components/home/Header/Header';
import BlogFooter from '../../../components/blog/BlogFooter/BlogFooter';
import { getAllArticleCategories } from '../../../actions/articleCategories';
import { getAllTagsAndSet } from '../../../actions/tags';
import './BlogLayout.scss';


class BlogLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount() {
    const {
      getAllArticleCategoriesDispatch,
      getAllTagsAndSetDispatch,
    } = this.props;
    //  запрашиваем категории, чтобы потом пришить их к навигации
    // getAllArticleCategoriesDispatch();
    // getAllTagsAndSetDispatch();
  }


  render() {
    const {
      match,
      location,
      isLoadedArticleCategories,
      isLoadedTags,
      children,
    } = this.props;


    // ждем пока загрузятся категории статей - те что в навигации будут
    // if (!isLoadedArticleCategories && !isLoadedTags) {
    //   return <p>loading...</p>;
    // }

    return (
      <Fragment>
        <section className="l-home">
          <Header />
          <main>
            {children}
          </main>
        </section>
        <BlogFooter />
      </Fragment>
    );
  }

}


const mapStateToProps = (state, ownProps) => ({
  isLoadedArticleCategories: state.getIn(['articleCategories', 'isLoaded']),
  isLoadedTags: state.getIn(['tags', 'isLoaded']),
});

const mapDispatchToProps = dispatch => ({
  getAllArticleCategoriesDispatch: () => dispatch(getAllArticleCategories()),
  getAllTagsAndSetDispatch: () => dispatch(getAllTagsAndSet()),
});


const BlogLayoutConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlogLayout);

export const getLayout = page => <BlogLayoutConnected>{page}</BlogLayoutConnected>;

export default BlogLayoutConnected;
