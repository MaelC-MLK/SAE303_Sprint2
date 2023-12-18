// import { M } from './js/model.js';

// await M.init();

// const tab = [];

// const data = M.getEvents('mmi1').concat(M.getEvents('mmi2').concat(M.getEvents('mmi3')));

// for (let ev of data) {
//   console.log(ev);

//   if (ev.enseignant == null || ev.enseignant.includes('adamczyk') || ev.enseignant.includes('crespin') || ev.enseignant.includes('lavefve') || ev.enseignant.includes('mora') || ev.enseignant.includes('guedira') || ev.enseignant.includes('moutat') || ev.enseignant.includes('springinsfeld')) {
//     console.log('prof');
//   } else {
//     console.log('intervenant');
//   }

//   tab.push({ name: ev.title, quantity: 30 });

// }

import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a'
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c'
  },
];

const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}
option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: series
};

option && myChart.setOption(option);
