import React from 'react';
import { List } from 'immutable';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Image from '../../../shared/components/Image/Image';
import prepareImgSrcSets from '../../../helpers/prepareImgSrcSets';
import { CLIENT_URL } from '../../../shared/utils/config';
import './EntryBadge.scss';

const EntryBadge = ({ dataItem, router }) => {
  const imgUrls = dataItem.getIn([ 'preview_img', 'img_urls' ]);

  // creating array structure [ size, url ]
  const entries = new List(imgUrls).map((item) => new List([ item[0], item[1] ]));

  // TODO(@fenricage): to helper
  // preparing string for attribute srcset
  // its important to remember when you testing:
  // browser only with first load will take srcSet dependenced on size your screen
  // but if before was loaded most or bigger image and set to cache
  // then browser for save time and traffic even on mobiles will use most big image
  const imgSrcSet = prepareImgSrcSets(entries);

  return (
    <article className="entry-badge">
      <Link href={`/articles/${dataItem.get('_id')}`}>
        <a className="entry-badge__link-wrap">
          <figure className="entry-badge__figure">
            {dataItem.get('preview_img') && (
              <Image
                width={940}
                height={493}
                className="entry-badge__img"
                src={`${CLIENT_URL}/${dataItem.getIn([ 'preview_img', 'img_url' ])}`}
                srcSet={imgSrcSet}
                alt=""
              />
            )}
          </figure>
          <div className="entry-badge__text-wrapper">
            <span className="entry-badge__category">
              {dataItem.getIn([ 'category', 'name' ])}
            </span>
            <h3 className="entry-badge__title">{dataItem.get('title')}</h3>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default withRouter(EntryBadge);
