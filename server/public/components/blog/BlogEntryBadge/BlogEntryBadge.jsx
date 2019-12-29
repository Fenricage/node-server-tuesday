import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import './BlogEntryBadge.scss';
import { List } from 'immutable';
import Image from '../../../shared/components/Image/Image';
import prepareImgSrcSets from '../../../helpers/prepareImgSrcSets';


const BlogEntryBadge = ({ dataItem }) => {

  const imgUrls = dataItem.getIn(['previewImg', 'img_urls']);

  // создаем структуру массив массивов [размер, url]
  const entries = new List(imgUrls).map(item => new List([item[0], item[1]]));
  // TODO вынести в хелпер
  // готовим строку для атрибута srcset
  // eslint-disable-next-line no-unused-vars
  // важно помнить при тестировании:
  // браузер лишь при первоначальной загрузке будет брать src set в зависимости от экрана
  // но если до это го было загружено самое большое изображение и записано в кэш
  // то браузер для экономии трафика даже на мобилах будет юзать самое большое изображение
  const imgSrcSet = prepareImgSrcSets(entries);

  return (
    <article className="blog-entry-badge">
      <Link href={`/blog/${dataItem.get('_id')}`}>
        <a className="blog-entry-badge__link-wrap">
          <figure className="blog-entry-badge__figure">
            {dataItem.get('previewImg') && (
              <Image
                width={940}
                height={493}
                className="blog-entry-badge__img"
                src={dataItem.getIn(['previewImg', 'img_url'])}
                srcSet={imgSrcSet}
                alt=""
              />
            )}
          </figure>
          <div className="blog-entry-badge__text-wrapper">
            {/* <Link */}
            {/*  to={`/categories/${dataItem.get('category')}`} */}
            {/*  className="entry-badge__category" */}
            {/* > */}
            {/*  {dataItem.get('category')} */}
            {/* </Link> */}
            {/* <span className="blog-entry-badge__category"> */}
            {/*  {dataItem.get('category')} */}
            {/* </span> */}
            <h3 className="blog-entry-badge__title">{dataItem.get('title')}</h3>
            {/* <TagListSuggestions */}
            {/*  tags={dataItem.get('tags')} */}
            {/* /> */}
          </div>
        </a>
      </Link>
    </article>
  );
};

export default BlogEntryBadge;
