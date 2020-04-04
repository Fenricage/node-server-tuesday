import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { fromJS } from 'immutable';
import cs from 'classnames';
import { Link, Router as NextRouter } from '../../../routes';
import './HomeMainPage.scss';
import { connect } from 'react-redux';
import { getAllArticlesAndSet, loadMoreArticles } from '../../../actions/articles';
import HomeMainPageView from '../HomeMainPageView/HomeMainPageView';
import Button from '../../../shared/components/Button/Button';
import Pagination from '../../../shared/components/Pagination/Pagination';
import { ARTICLES_LIMIT, SIZE_PAGE } from '../../../shared/constants/page';

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

    const offset = pageSize * (selected + 1) - pageSize;
    const queryString = `?offset=${offset}`;

    // "selected" began with 0
    if (router.pathname.startsWith('/categories')) {
      NextRouter.pushRoute(`${router.pathname}/${router.query.categoryId}${queryString}`
        .replace('//', '/'));
    } else {
      NextRouter.pushRoute(`${router.pathname}${queryString}`
        .replace('//', '/'));
    }
  };

  handleLoadMore = async (e) => {
    const {
      loadMoreArticlesDispatch,
      router,
    } = this.props;

    const { pageSize } = this.state;

    let {
      query: {
        offset = 0,
      } = {},
    } = router;

    offset = Number(offset);

    const articlesQueryParams = {
      orderBy: {
        _id: -1,
      },
      offset: offset + pageSize,
      limit: ARTICLES_LIMIT,
    };

    await loadMoreArticlesDispatch(articlesQueryParams);

    NextRouter.pushRoute(
      `${router.pathname}?offset=${Number(router.query.offset || 0) + ARTICLES_LIMIT}`,
      {
        shallow: true, // не запускает getInitialProps
      },
    );
  }

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
    // disable if current offset + ARTICLES_LIMIT more or equal totalArticles
    const isNoMoreArticles = Number(router.query.offset || 0) + ARTICLES_LIMIT >= totalArticles;

    return (
      <section className="home-main-page">
        <HomeMainPageView
          articles={articles}
          initLoaded={initLoaded}
          isLoadedArticles={isLoadedArticles}
          transformArticlesToItemGridData={this.transformArticlesToItemGridData}
        />

        {!isNoMoreArticles && (
          <div className="home-main-page__load-more-box">
            <Button
              className={cs({
                'home-main-page__load-more': true,
              })}
              type="button"
              disabled={isNoMoreArticles}
              isLoading={!isLoadedArticles}
              onClick={this.handleLoadMore}
            >
            загрузить еще
            </Button>
          </div>
        )}

        <Pagination
          total={totalArticles}
          pageSize={pageSize}
          className={cs({
            'home-main-page__pagination': true,
            hidden: isOnePage,
          })}
          onPageChange={this.handlePageClick}
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
  loadMoreArticlesDispatch: queryParams => dispatch(loadMoreArticles(queryParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeMainPage));
