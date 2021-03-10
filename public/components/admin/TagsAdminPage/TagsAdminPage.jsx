import React, { Component } from 'react';
import { Map } from 'immutable';
import './TagsAdminPage.scss';
import { connect } from 'react-redux';

import { getAllTagsAndSet, deleteTag } from '../../../actions/tags';
import TagsAdminForm from '../TagsAdminForm/TagsAdminForm';
import AdminTagsList from '../AdminTagsList/AdminTagsList';

class TagsAdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTag: new Map({}),
    };
  }


  componentDidMount() {
    this.updateTags();
  }


  componentDidUpdate(prevProps, prevState) {

  }

  setSelectedTag = tag => (e) => {
    this.setState({
      selectedTag: tag,
    });
  }

  unsetSelectedTag = () => {
    this.setState({
      selectedTag: new Map({}),
    });
  };


  updateTags = () => {
    const { getAllTagsAndSetDispatch } = this.props;
    getAllTagsAndSetDispatch();
  };

  deleteTag = id => () => {
    const { deleteTagDispatch } = this.props;
    deleteTagDispatch(id);
  };

  render() {
    const { tags, isLoadedTags, isDeletingTags } = this.props;
    const { selectedTag } = this.state;

    return (
      <section className="tags-admin-page">
        <AdminTagsList
          tags={tags}
          isLoadedTags={isLoadedTags}
          isDeletingTags={isDeletingTags}
          setSelectedTag={this.setSelectedTag}
          deleteTag={this.deleteTag}
        />
        <TagsAdminForm
          updateTags={this.updateTags}
          selectedTag={selectedTag}
          unsetSelectedTag={this.unsetSelectedTag}
        />
      </section>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  tags: state.getIn(['tags', 'data']),
  isLoadedTags: state.getIn(['tags', 'isLoaded']),
  isDeletingTags: state.getIn(['tags', 'isDeleting']),
});

const mapDispatchToProps = dispatch => ({
  getAllTagsAndSetDispatch: () => dispatch(getAllTagsAndSet()),
  deleteTagDispatch: id => dispatch(deleteTag(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsAdminPage);
