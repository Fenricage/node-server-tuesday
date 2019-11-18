import React from 'react';
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
      <ItemGridProvider value={{
        viewComponent: 'BlogEntryBadge',
        className: 'context-blog',
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
