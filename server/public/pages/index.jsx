import React, { Component } from 'react';
import HomeLayout from '../shared/layouts/HomeLayout/HomeLayout';
import HomeMainPage from '../components/home/HomeMainPage/HomeMainPage';
import { getAllArticleCategoriesServer } from '../actions/articleCategories';
import { getAllTagsAndSet } from '../actions/tags';

import api from '../shared/api/index'

class HomePageWithLayout extends Component {

  // static getInitialProps({ query, pathname, store, isServer }) {
  //   console.log("ONLY SEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRVERRRRRRRRRR??!!!?")
  //   return {query, pathname}
  // }


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


// вызывается и на сервере и на клиенте (при маршриутизации) работает тлько на страницах, на страницах читай что это замена cdm
HomePageWithLayout.getInitialProps = async ({ query, pathname, store, isServer }) => {
  const { dispatch } = store;
  // dispatch(getAllArticleCategoriesServer())
  // const articleCategories = await api.articeCategories.getAll({baseUrl: 'http://localhost:5000'});
  // const tags = await api.tags.getAll({baseUrl: 'http://localhost:5000'});
  console.log(" SECOND GET INITIAL PROPS COMPONENT")
  // console.log('\x1b[36m', 'apitest.get(HUI)' , apitest.get('HUI'), '\x1b[0m');
  // console.log("SERVE AND CLIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENT!!!!!!!!!") вызывает и на клиенте при маршритизации why?
  return { query, pathname };
};




export default HomePageWithLayout;
