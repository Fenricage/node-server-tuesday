import React, { Component } from 'react';
import Link from 'next/link';
import List from '../../../shared/components/List/List';
import './AllUsersAdminPageView.scss';

const AllUsersAdminPageView = ({
  users, isLoadedUsers, isDeletingUsers, onDeleteUserHandler,
}) => (
  <section className="b-all-users-admin-page">
    <section className="b-all-users-admin-page__top-bar">
      <h1>All Users Here</h1>
      <Link
        href="/admin/users/create"
      >
        <a>
            Create User
        </a>
      </Link>
    </section>
    <List
      data={users}
      isLoaded={isLoadedUsers}
      // onDeleteItem={onDeleteUserHandler}
      isDeletingItems={isDeletingUsers}
    />
  </section>
);

export default AllUsersAdminPageView;
