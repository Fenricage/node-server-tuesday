import React, { Component } from 'react';
import TagListSuggestions from '../TagListSuggestions/TagListSuggestions';
import Tag from '../Tag/Tag';
import './TagList.scss';

class TagList extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleAddTag = tag => (e) => {
    const { fields } = this.props;
    fields.push(tag);
  }

  handleRemoveTag = index => (e) => {
    const { fields } = this.props;
    fields.remove(index);
  }

  render() {
    const {
      tags,
      fields,
    } = this.props;

    // формируем уже выбранные тег ноды
    const selectedTags = fields.getAll();
    const selectedTagList = fields.map((tag, index) => {
      const currentTag = fields.get(index);
      return (
        <Tag
          key={currentTag.get('_id')}
          tag={currentTag}
          onClick={this.handleRemoveTag(index)}
        />
      );
    });


    // формируем ноды, отфильтрованные и вычтены выбранные тег ноды
    let filteredSuggestedTagsList = [];
    if (selectedTags) {
      filteredSuggestedTagsList = tags.get('records')
        .filter((tag) => {
          const tagId = tag.get('_id');
          const tagIsSelected = selectedTags
            .find(selectedTag => selectedTag.get('_id') === tagId);
          // если получаем объект значит есть совпадажющие айди
          // инвертим {} в false через !{}
          return !tagIsSelected;
        });
    } else {
      filteredSuggestedTagsList = tags.get('records');
    }

    return (
      <section className="tag-list">
        <section className="tag-list__selected-tags">
          {selectedTagList.size ?
            selectedTagList :
            (
              <span className="tag-list__no-selected-tags">
                Теги не выбраны
              </span>
            )
          }
        </section>
        <TagListSuggestions
          tags={filteredSuggestedTagsList}
          handleClickOnTag={this.handleAddTag}
        />
      </section>
    );
  }

}

export default TagList;
