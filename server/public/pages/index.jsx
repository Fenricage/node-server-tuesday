import React, { Component } from 'react';
import HomeLayout from '../shared/layouts/HomeLayout/HomeLayout';
import HomeMainPage from '../components/home/HomeMainPage/HomeMainPage'

class HomePageWithLayout extends Component {

  render() {
    const { query, pathname } = this.props
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
HomePageWithLayout.getInitialProps = async ({ query, pathname }) => {
  return { query, pathname };
};


export default HomePageWithLayout;
