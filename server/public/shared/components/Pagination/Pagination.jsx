import React, { Component } from 'react';
import { withRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import cs from 'classnames';
import './Pagination.scss';

class Pagination extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // уменьшает еоличество рендеров, пргверь
    const { router } = this.props;
    const { router: nextRouter } = nextProps;

    if (nextProps.total === undefined) {
      return false;
    }

    if (router.asPath === nextRouter.asPath) {
      return false;
    }

    return true;
  }


  render() {
    const {
      total,
      pageSize,
      onPageChange,
      className,
      router,
    } = this.props;

    if (!total) {
      return null;
    }

    // формируем объект из query параметров
    const { query } = router;

    // TODO в качестве лайфхака чтобы не было видно дерганья курсора можно поставить на .active cursor: default
    // формируем инит выделенной страницы в компоненте пагинации
    // и вычитаем единицу чтобы подогнать под формат
    // если query параметров нет то принято считать что мы на первой странице
    let selectedPage = 0;
    if (Object.keys(query).length) {
      selectedPage = parseInt(query.page, 10) - 1;
    }

    return (
      <section>
        <ReactPaginate
          previousLabel="<<"
          nextLabel=">>"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={Math.ceil(total / pageSize)}
          marginPagesDisplayed={2}
          initialPage={selectedPage}
          pageRangeDisplayed={5}
          disableInitialCallback
          disabledClassName="disabled"
          onPageChange={onPageChange}
          containerClassName={cs({
            pagination: true,
            [`pagination_${className}`]: className,
          })}
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </section>
    );
  }

}

export default withRouter(Pagination);
