import React from 'react';
import GridLayout from 'react-grid-layout';
import './TestGrid.scss';

const TestGrid = () => {
  const layout = [
    {
      i: 'a', x: 0, y: 0, w: 1, h: 2, static: true,
    },
    {
      i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4,
    },
    {
      i: 'c', x: 4, y: 0, w: 1, h: 2,
    },
  ];
  return (
    <GridLayout className="layout-test" layout={layout} cols={12} rowHeight={30} width={1200}>
      <div className="layout-test__item" key="a">a</div>
      <div className="layout-test__item" key="b">b</div>
      <div className="layout-test__item" key="c">c</div>
    </GridLayout>
  );
};

export default TestGrid;
