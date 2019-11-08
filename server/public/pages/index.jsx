import React, { Component } from 'react';
import HomeLayout from '../shared/layouts/HomeLayout/HomeLayout';
import HomeMainPage from '../components/home/HomeMainPage/HomeMainPage'

class HomePageWithLayout extends Component {

  render() {
    return (
      <HomeLayout>
        <HomeMainPage/>
      </HomeLayout>
    );
  }

}

export default HomePageWithLayout;
