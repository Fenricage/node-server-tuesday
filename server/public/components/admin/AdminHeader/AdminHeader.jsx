import React from 'react';
import Logout from '../Logout/Logout';
import './AdminHeader.scss';

const AdminHeader = () => (
  <header className="b-admin-header">
    <h2>Admin Header</h2>
    <Logout />
  </header>
);

export default AdminHeader;
