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
    <section className="b-home-main-page">
      <ItemGridProvider value={{
        viewComponent: 'EntryBadge',
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
