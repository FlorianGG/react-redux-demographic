import Highcharts from 'highcharts';
import React from 'react';
import ReactChartkick, { ColumnChart } from 'react-chartkick';

import Flag from './Flag';

ReactChartkick.addAdapter(Highcharts)

const xTitle = 'Âge';
const yTitle = '% de mortalité';

const MortalityListItem = () => {
  return (
    <div>
      <Flag country="France" className="flag-medium"/>
      <ColumnChart xtitle={xTitle} ytitle={yTitle} data={[["Sun", 32], ["Mon", 46], ["Tue", 28]]}/>
    </div>
  );
};

export default MortalityListItem;
