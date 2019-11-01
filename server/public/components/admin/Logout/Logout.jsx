import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import './Logout.scss';

class Logout extends Component {

    logoutHandler = () => {
      const { logout } = this.props;
      logout();
    }

    render() {

      return (
        <section className="b-logout">
          <button onClick={this.logoutHandler}>
                    Log out
          </button>
        </section>
      );
    }

}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logout);
