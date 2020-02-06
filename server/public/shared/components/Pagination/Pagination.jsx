import React, { Component, createRef } from 'react';
import { withRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { Link, Router as NextRouter } from '../../../routes';
import cs from 'classnames';
import './Pagination.scss';

class Pagination extends Component {

  constructor(props) {
    super(props);
    const initialPage = parseInt(props.router.query.page, 10) || 0;
    this.state = {
      selectedPage: initialPage,
      maxPage: Math.ceil(props.total/props.pageSize),
    };

    this.pagination = createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    const { router, className } = this.props;
    const { router: prevRouter } = prevProps;

    const { selectedPage } = this.state;

    if (router.query.page !== prevRouter.query.page) {
      this.setSelectedPage();


    }

    if (this.state.selectedPage !== prevState.selectedPage) {
      // TODO(@fenricage): вынести за пределы данного компонента. Ввести пропс onUpdatePage


    }
  }


  shouldComponentUpdate(nextProps, nextState) {


    // уменьшает еоличество рендеров, пргверь
    const { router } = this.props;
    const { router: nextRouter } = nextProps;

    if (nextProps.total === undefined) {
      return false;
    }

    // if (router.asPath === nextRouter.asPath) {
    //   return false;
    // }

    return true;
  }

  setSelectedPage = () => {
    const { router } = this.props;
    //TODO декрементирует на единицу, мешает хэндлерам, пересмотреть логику
    const selectedPage = parseInt(router.query.page, 10);
    this.setState({
      selectedPage,
    });
  };

  handleClickNextPage = (e) => {
    const { match, router, pageSize } = this.props;
    const { selectedPage } = this.state;
    console.log('selectedPage', selectedPage)

    if (router.pathname.startsWith('/categories')) {
      NextRouter.pushRoute(`${router.pathname}/${router.query.categoryId}?page=${selectedPage + 1}&size=${pageSize}`.replace('//', '/'));
    } else {
      NextRouter.pushRoute(`${router.pathname}?page=${selectedPage + 1}&size=${pageSize}`.replace('//', '/'));
    }
  };

  handleClickPrevPage = (e) => {
    const { match, router, pageSize } = this.props;
    const { selectedPage } = this.state;


    if (router.pathname.startsWith('/categories')) {
      NextRouter.pushRoute(`${router.pathname}/${router.query.categoryId}?page=${selectedPage - 1}&size=${pageSize}`.replace('//', '/'));
    } else {
      NextRouter.pushRoute(`${router.pathname}?page=${selectedPage - 1}&size=${pageSize}`.replace('//', '/'));
    }
  };


  render() {
    const {
      total,
      pageSize,
      onPageChange,
      className,
      router,
    } = this.props;

    const {
      selectedPage,
      maxPage,
    } = this.state;

    if (!total) {
      return null;
    }


    // формируем объект из query параметров
    const { query } = router;

    // TODO в качестве лайфхака чтобы не было видно дерганья курсора можно поставить на .active cursor: default
    // формируем инит выделенной страницы в компоненте пагинации
    // и вычитаем единицу чтобы подогнать под формат
    // если query параметров нет то принято считать что мы на первой странице
    // let selectedPage = 0;
    // if (Object.keys(query).length) {
    //   selectedPage = parseInt(query.page, 10) - 1;
    // }

    // const neededPaginationNode = document.querySelector(`.${className} .pagination__page_active`);
    // console.log('neededPaginationNode', neededPaginationNode);
    // neededPaginationNode.style.cssText = "background-color: red;";

    return (
      <section className={cs({
        pagination: true,
        [`${className}`]: className,
      })}
      >
        <button
          type="button"
          className="pagination__prev"
          onClick={this.handleClickPrevPage}
          disabled={selectedPage === 1}
        >
          Предыдущая
        </button>
        <ReactPaginate
          ref={this.pagination}
          previousLabel="Предыдущая"
          nextLabel="Следующая"
          breakLabel="..."
          pageCount={Math.ceil(total / pageSize)}
          marginPagesDisplayed={3}
          initialPage={selectedPage - 1}
          forcePage={selectedPage - 1}
          pageRangeDisplayed={2}
          disableInitialCallback
          onPageChange={onPageChange}
          containerClassName={cs({
            pagination__container: true,
          })}
          subContainerClassName="pages pagination"
          previousClassName="pagination__previous-page"
          previousLinkClassName="pagination__previous-link"
          breakClassName="pagination__break-page"
          breakLinkClassName="pagination__break-link"
          pageClassName="pagination__page"
          pageLinkClassName="pagination__page-link"
          activeClassName="pagination__page_active"
          nextClassName="pagination__next-page"
          nextLinkClassName="pagination__next-link"
          disabledClassName="disabled"
        />
        <button
          type="button"
          className="pagination__next"
          disabled={selectedPage === maxPage}
          onClick={this.handleClickNextPage}
        >
          Следующая
        </button>
      </section>
    );
  }

}

export default withRouter(Pagination);
