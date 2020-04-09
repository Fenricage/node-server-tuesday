import React, { Component } from 'react';
import './List.scss';
import ListView from '../ListView/ListView';

class List extends Component {

  render() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      return <p>loader...</p>;
    }

    return (
      <ListView {...this.props} />
    );
  }

}

export default List;
