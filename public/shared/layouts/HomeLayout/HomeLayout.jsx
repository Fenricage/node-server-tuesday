import React, {
  Component, Fragment, useState, useEffect, useRef,
} from 'react';
import { connect } from 'react-redux';
// import { Header, HomeMainPage, ArticleDetailPage } from 'Components';
import {
  TransitionGroup, CSSTransition, SwitchTransition, Transition, ReplaceTransition,
} from 'react-transition-group';
import { List, fromJS, Map } from 'immutable';
import Header from '../../../components/home/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAllArticleCategories } from '../../../actions/articleCategories';
import { getAllTagsAndSet } from '../../../actions/tags';
import './HomeLayout.scss';

// сначала возвращает, потом сетит в useEffect
// при первом вызове возвращает undefined
function inPropvious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

class HomeLayout extends Component {

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
      <>
        <section className="l-home">
          <Header />
          <main>
            {children}
          </main>
        </section>
        <Footer />
      </>
    );
  }

}


const mapStateToProps = (state, ownProps) => ({
  isLoadedArticleCategories: state.getIn([ 'articleCategories', 'isLoaded' ]),
  isLoadedTags: state.getIn([ 'tags', 'isLoaded' ]),
});

const mapDispatchToProps = (dispatch) => ({
  getAllArticleCategoriesDispatch: () => dispatch(getAllArticleCategories()),
  getAllTagsAndSetDispatch: () => dispatch(getAllTagsAndSet()),
});


const HomeLayoutConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeLayout);

export const getLayout = (page) => <HomeLayoutConnected>{page}</HomeLayoutConnected>;

export default HomeLayoutConnected;
