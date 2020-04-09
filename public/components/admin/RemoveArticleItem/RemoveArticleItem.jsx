import React from 'react';

const RemoveArticleItem = ({ onClickHandler }) => (
  <section>
    <button type="button" onClick={onClickHandler}>Remove</button>
  </section>
);

export default RemoveArticleItem;
