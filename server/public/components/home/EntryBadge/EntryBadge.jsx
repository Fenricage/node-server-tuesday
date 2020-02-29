import React from 'react';
import { List } from 'immutable';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Image from '../../../shared/components/Image/Image';
import prepareImgSrcSets from '../../../helpers/prepareImgSrcSets';
import { CLIENT_URL } from '../../../shared/utils/config';
import './EntryBadge.scss';


const EntryBadge = ({ dataItem, router }) => {

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
    <article className="entry-badge">
      <Link href={`/articles/${dataItem.get('_id')}`}>
        <a className="entry-badge__link-wrap">
          <figure className="entry-badge__figure">
            {dataItem.get('previewImg') && (
              <Image
                width={940}
                height={493}
                className="entry-badge__img"
                src={`${CLIENT_URL}/${dataItem.getIn(['previewImg', 'img_url'])}`}
                srcSet={imgSrcSet}
                alt=""
              />
            )}
          </figure>
          <div className="entry-badge__text-wrapper">
            {/* <Link */}
            {/*  to={`/categories/${dataItem.get('category')}`} */}
            {/*  className="entry-badge__category" */}
            {/* > */}
            {/*  {dataItem.get('category')} */}
            {/* </Link> */}
            <span className="entry-badge__category">
              {dataItem.get('category')}
            </span>
            <h3 className="entry-badge__title">{dataItem.get('title')}</h3>
            {/* <TagListSuggestions */}
            {/*  tags={dataItem.get('tags')} */}
            {/* /> */}
          </div>
        </a>
      </Link>
    </article>
  );
};

export default withRouter(EntryBadge);
