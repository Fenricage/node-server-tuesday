import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import './BlogEntryBadge.scss';

const BlogEntryBadge = ({ dataItem }) => (
  <article className="blog-entry-badge">
    <Link href={`/articles/${dataItem.get('_id')}`}>
      <a className="blog-entry-badge__link-wrap">
        <div className="blog-entry-badge__text-wrapper">
          {/* <Link */}
          {/*  to={`/categories/${dataItem.get('category')}`} */}
          {/*  className="entry-badge__category" */}
          {/* > */}
          {/*  {dataItem.get('category')} */}
          {/* </Link> */}
          <span className="blog-entry-badge__category">
            {dataItem.get('category')}
          </span>
          <h3 className="blog-entry-badge__title">{dataItem.get('title')}</h3>
          {/* <TagListSuggestions */}
          {/*  tags={dataItem.get('tags')} */}
          {/* /> */}
        </div>
      </a>
    </Link>
  </article>
);

export default BlogEntryBadge;
