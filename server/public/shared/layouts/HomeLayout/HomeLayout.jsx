import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Header, HomeMainPage, ArticleDetailPage } from 'Components';
import Header from '../../../components/home/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAllArticleCategories } from '../../../actions/articleCategories';
import { getAllTagsAndSet } from '../../../actions/tags';
import './HomeLayout.scss';


class HomeLayout extends Component {

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
        <Footer />
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


const HomeLayoutConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeLayout);

export const getLayout = page => <HomeLayoutConnected>{page}</HomeLayoutConnected>;

export default HomeLayoutConnected;
