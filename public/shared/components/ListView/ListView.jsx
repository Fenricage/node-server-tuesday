import React from 'react';
import cs from 'classnames';
import './ListView.scss';
import ListItem from '../ListItem/ListItem';

const ListView = ({ data, className, ...other }) => {
  return (
    <section className={cs({
      list: true,
      [`${className}`]: className,
    })}>
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
