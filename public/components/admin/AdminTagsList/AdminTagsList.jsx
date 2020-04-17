import React, { Component } from 'react';
import AdminTag from '../AdminTag/AdminTag';
import './AdminTagsList.scss';

class AdminTagsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterTags: '',
    };
  }


  componentDidMount() {

  }


  componentDidUpdate(prevProps, prevState) {

  }


  handleOnChageFilterTagsInput = ({ target: { value } }) => {
    this.setState({
      filterTags: value,
    });
  }


  render() {
    const {
      isLoadedTags,
      setSelectedTag,
      deleteTag,
      isDeletingTags,
      tags,
    } = this.props;

    if (!isLoadedTags) {
      return <p>is loading ...</p>;
    }

    const { filterTags } = this.state;

    const tagsTotal = tags.get('total');
    const tagsRecords = tags.get('records');

    // фильтруем теги по коду
    const filteredTags = tagsRecords
      .filter(
        tag => tag.get('code')
          .toLowerCase()
          .match(filterTags.toLowerCase()),
      );

    // создаем список тегов
    const tagsList = filteredTags.map(tag => (
      <AdminTag
        key={tag.get('_id')}
        tag={tag}
        isDeletingTags={isDeletingTags}
        onClick={setSelectedTag(tag)}
        onDelete={deleteTag}
      />
    ));


    return (
      <section className="admin-tags-list">
        <section className="admin-tags-list__top-bar">
          <input
            type="text"
            placeholder="Отфильтруйте теги ..."
            className="admin-tags-list__input-filter-tags"
            value={filterTags}
            onChange={this.handleOnChageFilterTagsInput}
          />
          <section className="admin-tags-list__total">
            <p className="admin-tags-list__total-text">Всего тегов: </p>
            <span className="admin-tags-list__total-value">{tagsTotal}</span>
          </section>
        </section>
        <section className="admin-tags-list__tags">
          {
            tagsList.size ?
              tagsList :
              <p className="admin-tags-list__tags-not-defined">Тегов не найдено</p>
          }
        </section>
      </section>
    );
  }

}

export default AdminTagsList;
