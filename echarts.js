import { M } from './js/model.js';

await M.init();


var tab = [
  { name: 'MOUTAT Audrey' },
  { name: 'MORA Frédéric' },
  { name: 'ADAMCZYK Natacha' },
  { name: 'GUEDIRA Réda' },
  { name: 'LAVEFVE Valérie' },
  { name: 'SPRINGINSFELD Denis' },
  { name: 'CRESPIN Benoit' },
  { name: 'ADAM Fabrice' },
  { name: 'AYMARD Adrien' },
  { name: 'AYMARD Alain' },
  { name: 'BABIN Valentin' },
  { name: 'BONNAUD Lucile' },
  { name: 'BERTHIER Hélène' },
  { name: 'CHANTELOUP Amelin' },
  { name: 'CREDEVILLE Maxime' },
  { name: 'CHUPIN Suzanne' },
  { name: 'DAL BELLO Marine' },
  { name: 'DEMAISON Guillaume' },
  { name: 'DULAC Benoit' },
  { name: 'DUBREUIL Anne-Sophie' },
  { name: 'FEYDI Philippe' },
  { name: 'FIAMMETTI Deborah' },
  { name: 'FLITTI Eric' },
  { name: 'GERAUD Fabien' },
  { name: 'GOUDARD Bérénice' },
  { name: 'GRASSET Véronique' },
  { name: 'JARDOU Thomas' },
  { name: 'JAUFFRET Manon' },
  { name: 'JOUY Maxime' },
  { name: 'LAFONT Mathieu' },
  { name: 'LASCAUD Raphaël' },
  { name: 'LAZARE Jean-Cédric' },
  { name: 'LE BAIL Emma' },
  { name: 'LECOMTE Catherine' },
  { name: 'MARTY Thomas' },
  { name: 'MONDOLLOT Rémi' },
  { name: 'MINIER Jules' },
  { name: 'NENIN Cédric' },
  { name: 'PAILLIER Stéphane' },
  { name: 'PINAUD Anaïs' },
  { name: 'PORRO Heinich' },
  { name: 'PORTAL Nicolas' },
  { name: 'SABOURIN Erwan' },
  { name: 'SINCLAIR Diego' },
  { name: 'THARAUD Sébastien' },
  { name: 'TZVETKOVA Maria' },
  { name: 'TURBELIN Pierre' },
  { name: 'VALETTE Sophie' },
  { name: 'LU Inès' },
  { name: 'KABAB Simon' },
  { name: 'VEILLON Pascal' }
];


const data = M.getEvents('mmi1').concat(M.getEvents('mmi2').concat(M.getEvents('mmi3')));

import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: tab.map(e => e.name)
  },
  series: [
    {
      name: 'CM',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: 'TD',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'TP',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
  ]
};

option && myChart.setOption(option);
