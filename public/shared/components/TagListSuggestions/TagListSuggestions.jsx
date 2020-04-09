import React from 'react';
import cs from 'classnames';
import Tag from '../Tag/Tag';
import './TagListSuggestions.scss';

const TagListSuggestions = ({ tags, handleClickOnTag, className }) => {

  const suggestedTagList = tags.map(tag => (
    <Tag
      key={tag.get('_id')}
      tag={tag}
      onClick={handleClickOnTag && handleClickOnTag(tag)}
    />
  ));
  return (
    <section className={cs({
      'tag-list-suggestions': true,
      [`${className}`]: className,
    })}
    >
      {suggestedTagList}
    </section>
  );
};

export default TagListSuggestions;
