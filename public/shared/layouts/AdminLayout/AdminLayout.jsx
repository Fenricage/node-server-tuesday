import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from '../../../components/admin/SidebarContent/SidebarContent';
import AdminHeader from '../../../components/admin/AdminHeader/AdminHeader';
import './AdminLayout.scss';

const stylesSidebar = {
  sidebar: {
    background: 'white',
    width: '250px',
    zIndex: 1,
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
        <section className="l-admin">
          <Sidebar
            sidebar={<SidebarContent />}
            onSetOpen={this.onSetSidebarOpen}
            styles={stylesSidebar}
            docked={this.state.sidebarOpen}
            transitions={false}
          >

            <AdminHeader />
            <main>
              {children}
            </main>
          </Sidebar>
        </section>
      );
    }

}

export default AdminLayout;
