import React from 'react';
import ItemGrid from '../../../shared/components/ItemGrid/ItemGrid';
import './HomeMainPageView.scss';
import { ItemGridProvider } from '../../../shared/contexts';

const HomeMainPageView = ({
  articles,
  transformArticlesToItemGridData,
}) => {
  const transformedArticles = transformArticlesToItemGridData(articles.get('records'));

  return (
    <section className="home-main-page">
      <ItemGridProvider value={{
        viewComponent: 'EntryBadge',
        className: 'home-main-page__item-grid',
      }}
      >
        <ItemGrid
          data={transformedArticles}
        />
      </ItemGridProvider>
    </section>
  );
};

export default HomeMainPageView;
