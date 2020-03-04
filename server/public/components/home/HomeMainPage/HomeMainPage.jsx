import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { fromJS } from 'immutable';
import cs from 'classnames';
import { Link, Router as NextRouter } from '../../../routes';
import './HomeMainPage.scss';
import { connect } from 'react-redux';
import { getAllArticlesAndSet } from '../../../actions/articles';
import HomeMainPageView from '../HomeMainPageView/HomeMainPageView';
import Pagination from '../../../shared/components/Pagination/Pagination';
import { SIZE_PAGE } from '../../../shared/constants/page';

class HomeMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: SIZE_PAGE,
      initLoaded: false,
    };
  }


  componentDidUpdate(prevProps, prevState) {
    const {
      router,
    } = this.props;

    const {
      router: prevRouter,
    } = prevProps;


    // сравниваем пути? мб стоит query параметры срапавнивать

    // if (router.asPath !== prevRouter.asPath) {
    //   this.getArticles();
    // }
  }


  getArticles = () => {
    const {
      getAllArticlesAndSetDispatch,
      router,
    } = this.props;

    const { pageSize } = this.state;

    const { query } = router;
    // есть query - объект не пуст
    // TODO нпиши хелпер, который определяет что query.page это строка, (typeof string)
    // которая после преобразования к числу имеет тип числа (еtypeof number)
    if (Object.keys(query).length && query.page && query.size) {
      // TODO проверка на наличие в query page  и size
      const { page, size } = query;
      // extra для дополнительных параметров
      const extra = {};
      // if (params.category) {
      //   extra.category = params.category;
      // }
      const queryParams = { page, size, orderBy: { _id: -1 } };
      queryParams.extra = extra;
      return getAllArticlesAndSetDispatch(queryParams);
      //  первая страница с предустановленным размером
    }
    const queryParams = { page: 1, size: pageSize, orderBy: { _id: -1 } };
    // extra для дополнительных параметров
    const extra = {};
    // if (params.category) {
    //   extra.category = params.category;
    // }
    queryParams.extra = extra;
    return getAllArticlesAndSetDispatch(queryParams);
  };

  // TODO:(@fenticage) эта хуйня нужна вообщзе? в хелперы есть клон уже к тому же
  transformArticlesToItemGridData = articles => articles.map(article => fromJS({
    _id: article.get('_id'),
    previewImg: article.get('preview_img') ? article.get('preview_img') : '',
    title: article.get('title'),
    category: article.getIn([ 'category', 'name' ]),
    tags: article.get('tags'),
  }));

  handlePageClick = ({ selected }) => {
    const { match, router } = this.props;
    const { pageSize } = this.state;

    // "selected" began with 0
    if (router.pathname.startsWith('/categories')) {
      NextRouter.pushRoute(`${router.pathname}/${router.query.categoryId}?page=${selected + 1}&size=${pageSize}`.replace('//', '/'));
    } else {
      NextRouter.pushRoute(`${router.pathname}?page=${selected + 1}&size=${pageSize}`.replace('//', '/'));
    }

    // setTimeout(() => {
    //   const neededPaginationNode = document
    //     .querySelector('.home-main-page__pagination .pagination__page_active');
    //
    //   console.log('neededPaginationNode', neededPaginationNode)
    //
    //   let nextSibling = {
    //     node: neededPaginationNode.nextElementSibling,
    //     siblingCounter: 1,
    //   }
    //
    //   let prevSibling = {
    //     node: neededPaginationNode.previousElementSibling,
    //     siblingCounter: 1,
    //   }
    //
    //   while (nextSibling.node.classList.contains('pagination__page') || nextSibling.node.classList.contains('pagination__break-page')) {
    //     // console.log('nextSibling', nextSibling.node)
    //
    //     const classForDelete = nextSibling.node.className
    //       .split(' ')
    //       .find(classNameChunk => {
    //         return /sibling__.*/.test(classNameChunk);
    //       });
    //
    //     if (classForDelete) {
    //       nextSibling.node.classList.remove(classForDelete);
    //     }
    //
    //     nextSibling.node.classList.add(`sibling__${nextSibling.siblingCounter}`);
    //     nextSibling.node = nextSibling.node.nextElementSibling;
    //     nextSibling.siblingCounter = nextSibling.siblingCounter + 1;
    //   }
    //
    //   while (prevSibling.node.classList.contains('pagination__page') || prevSibling.node.classList.contains('pagination__break-page')) {
    //     // console.log('nextSibling', nextSibling.node)
    //
    //     const classForDelete = prevSibling.node.className
    //       .split(' ')
    //       .find(classNameChunk => {
    //         return /sibling__.*/.test(classNameChunk);
    //       });
    //
    //     if (classForDelete) {
    //       prevSibling.node.classList.remove(classForDelete);
    //     }
    //
    //     prevSibling.node.classList.add(`sibling__${prevSibling.siblingCounter}`);
    //     prevSibling.node = prevSibling.node.nextElementSibling;
    //     prevSibling.siblingCounter = prevSibling.siblingCounter + 1;
    //   }
    //
    //
    //
    // }, 0);
  };


  render() {
    const {
      isLoadedArticles,
      articles,
      match,
      totalArticles,
      router,
    } = this.props;

    const {
      pageSize,
      initLoaded,
    } = this.state;
    const isOnePage = totalArticles <= pageSize;

    return (
      <section className="home-main-page">
        <Pagination
          total={totalArticles}
          pageSize={pageSize}
          className={cs({
            'home-main-page__pagination': true,
            hidden: isOnePage,
          })}
          onPageChange={this.handlePageClick}
        />
        <HomeMainPageView
          articles={articles}
          initLoaded={initLoaded}
          isLoadedArticles={isLoadedArticles}
          transformArticlesToItemGridData={this.transformArticlesToItemGridData}
        />
      </section>

    );
  }
}

const mapStateToProps = state => ({
  articles: state.getIn([ 'articles', 'data' ]),
  isLoadedArticles: state.getIn([ 'articles', 'isLoaded' ]),
  totalArticles: state.getIn([ 'articles', 'data', 'total' ]),
});

const mapDispatchToProps = dispatch => ({
  getAllArticlesAndSetDispatch: queryParams => dispatch(getAllArticlesAndSet(queryParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeMainPage));
