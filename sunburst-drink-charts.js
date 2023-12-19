import * as echarts from 'echarts';

var app = {};

var chartDom = document.getElementById('sunburst-charts');
var myChart = echarts.init(chartDom, 'dark');
var option;

var data = [
  {
    name: 'Semestre 1',
    itemStyle: {
      color: '#da0d68'
    },
    value: 1,
  },
  {
    name: 'Semestre 2',
    itemStyle: {
      color: '#da1d23'
    },
    value: 1,
  },
  {
    name: 'Semestre 3',
    itemStyle: {
      color: '#ebb40f'
    },
    value: 1,
    
  },
  {
    name: 'Semestre 4',
    itemStyle: {
      color: '#187a2f'
    },
    value: 1,
    
  },
  {
    name: 'Semestre 5',
    itemStyle: {
      color: '#0aa3b5'
    },
    value: 1,
    
  },
  {
    name: 'Semestre 6',
    itemStyle: {
      color: '#5e239d'
    },
    value: 1,
  },
  
];
option = {
  series: {
    type: 'sunburst',
    data: data,
    radius: [0, '95%'],
    sort: undefined,
    emphasis: {
      focus: 'ancestor'
    },
    levels: [
      {},
      {
        r0: '15%',
        r: '35%',
        itemStyle: {
          borderWidth: 2
        },
        label: {
          rotate: 'tangential'
        }
      },
      {
        r0: '35%',
        r: '70%',
        label: {
          align: 'right'
        }
      },
      {
        r0: '70%',
        r: '72%',
        label: {
          position: 'outside',
          padding: 3,
          silent: false
        },
        itemStyle: {
          borderWidth: 3
        }
      }
    ]
  }
};

option && myChart.setOption(option);
