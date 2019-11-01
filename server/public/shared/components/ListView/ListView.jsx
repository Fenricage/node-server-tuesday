import React from 'react';
import './ListView.scss';
import ListItem from '../ListItem/ListItem';

const ListView = ({ data, ...other }) => {
  return (
    <section>
      {data.map((item, index) => (
        <ListItem
          key={item.get('_id')}
          item={item}
          {...item}
          {...other}
        />
      ))}
    </section>
  );
};

export default ListView;
