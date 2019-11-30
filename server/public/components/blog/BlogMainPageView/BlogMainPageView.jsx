import React from 'react';
import cs from 'classnames';
import ItemGrid from '../../../shared/components/ItemGrid/ItemGrid';
import './BlogMainPageView.scss';
import { ItemGridProvider } from '../../../shared/contexts';

const BlogMainPageView = ({
  articles,
  isLoadedArticles,
  transformArticlesToItemGridData,
  initLoaded,
}) => {

  // показываем лоадер только при первой инициализации
  // TODO вернуть как разберешься с SSR init loaded не нужен при ssr
  // if (!initLoaded) {
  //   return <p>loader hom main page view ...</p>;
  // }
  // if (!isLoadedArticles) {
  //   return <p>loader hom main page view ...</p>;
  // }
  // трансформируем данные под грид
  const transformedArticles = transformArticlesToItemGridData(articles.get('records'));

  return (
    <section className="blog-main-page">
      <h2 className="blog-main-page__title">Latest Articles</h2>
      <ItemGridProvider value={{
        viewComponent: 'BlogEntryBadge',
        className: cs({
          'blog-main-page__grid': true,
        }),
      }}
      >
        <ItemGrid
          data={transformedArticles}
        />
      </ItemGridProvider>
    </section>
  );
};

export default BlogMainPageView;
