import React, { Component } from 'react';
import HomeLayout from '../shared/layouts/HomeLayout/HomeLayout';
import HomeMainPage from '../components/home/HomeMainPage/HomeMainPage';
import { getAllArticleCategories } from '../actions/articleCategories';
import { getAllTagsAndSet } from '../actions/tags';

import api from '../shared/api/index'

class HomePageWithLayout extends Component {

  render() {
    const { query, pathname } = this.props;
    return (
      <HomeLayout>
        <HomeMainPage
          query={query}
          pathname={pathname}
        />
      </HomeLayout>
    );
  }

}

// вызывается и на сервере и на клиенте
HomePageWithLayout.getInitialProps = async ({ query, pathname, store, isServer }) => {
  const { dispatch } = store;
  const articleCategories = await api.articeCategories.getAll({baseUrl: 'http://localhost:5000'});
  const tags = await api.tags.getAll({baseUrl: 'http://localhost:5000'});
  console.log('\x1b[36m', 'tags' , tags, '\x1b[0m');
  return { query, pathname };
};



export default HomePageWithLayout;
