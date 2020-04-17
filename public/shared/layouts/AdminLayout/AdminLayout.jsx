import React, { Component } from 'react';
// import { Route, Switch, Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import SidebarContent from '../../../components/admin/SidebarContent/SidebarContent';
import AdminHeader from '../../../components/admin/AdminHeader/AdminHeader';
// import {
//   AdminHeader,
//   SidebarContent,
//   ArticlesAdminPage,
//   MainAdminPage,
//   AllArticleCategoriesAdminPage,
//   AllUsersAdminPage,
//   ArticleCategoriesAdminPage,
//   TagsAdminPage,
// } from 'Components';
import './AdminLayout.scss';

const stylesSidebar = {
  sidebar: {
    background: 'white',
    width: '250px',
  },
};

class AdminLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
  }

    onSetSidebarOpen = (open) => {
      this.setState({ sidebarOpen: open });
    }

    render() {
      const { children } = this.props;

      return (
        <Sidebar
          sidebar={<SidebarContent />}
          onSetOpen={this.onSetSidebarOpen}
          styles={stylesSidebar}
          docked={this.state.sidebarOpen}
          transitions={false}
        >
          <section className="l-admin">
            <AdminHeader />
            <main>
              {children}
            </main>
          </section>
        </Sidebar>
      );
    }

}

export default AdminLayout;
