import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllUsersAdminPageView from '../AllUsersAdminPageView/AllUsersAdminPageView';
import './AllUsersAdminPage.scss';
import { reqUsersFetch, reqDeleteUser } from '../../../actions/users';
import { Map } from 'immutable';

class AllUsersAdminPage extends Component {

  componentDidMount() {
    const { reqUsersFetchDispatch } = this.props;
    reqUsersFetchDispatch();
  }

  transformUsersDataToListFormat = users => users.map(user => new Map({
    title: user.get('username'),
    _id: user.get('_id'),
  }));

  onDeleteUserHandler = id => () => this.props.reqDeleteUserDispatch(id)


  render() {
    const {
      isLoadedUsers, users, isDeletingUsers, reqDeleteUserDispatch,
    } = this.props;

    const transformedToListFormatUsers = this.transformUsersDataToListFormat(users);

    return (
      <AllUsersAdminPageView
        users={transformedToListFormatUsers}
        isLoadedUsers={isLoadedUsers}
        isDeletingUsers={isDeletingUsers}
        onDeleteUserHandler={this.onDeleteUserHandler}
      />
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  users: state.getIn(['users', 'data']),
  isLoadedUsers: state.getIn(['users', 'isLoaded']),
  isDeletingUsers: state.getIn(['users', 'isDeleting']),
});

const mapDispatchToProps = dispatch => ({
  // getAllArticlesAndSetDispatch: () => dispatch(getAllArticlesAndSet()),
  reqDeleteUserDispatch: id => dispatch(reqDeleteUser(id)),
  reqUsersFetchDispatch: () => dispatch(reqUsersFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersAdminPage);
