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

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
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
    data: ['MOUTAT Audrey','MORA Frederic','ADAMCZYK Natacha','GUEDIRA Reda','LAVEFVE Valerie','SPRINGINSFELD Denis','CRESPIN Benoit','ADAM Fabrice','AYMARD Adrien','AYMARD Alain','BABIN Valentin','BONNAUD Lucile','BERTHIER Helene','CHANTELOUP Amelin','CREDEVILLE Maxime','CHUPIN Suzanne','DAL BELLO Marine','DEMAISON Guillaume','DULAC Benoit','DUBREUIL Anne-Sophie','FEYDI Philippe','FIAMMETTI Deborah','FLITTI Eric','GERAUD Fabien','GOUDARD Berenice','GRASSET Veronique','JARDOU Thomas','JAUFFRET Manon','JOUY Maxime','LAFONT Mathieu','LASCAUD Raphael','LAZARE Jean-Cedric','LE BAIL Emma','LECOMTE Catherine','MARTY Thomas','MONDOLLOT Remi','MINIER Jules','NENIN Cedric','PAILLIER Stephane','PINAUD Anais','PORRO Heinich','PORTAL Nicolas','SABOURIN Erwan','SINCLAIR Diego','THARAUD Sebastien','TZVETKOVA Maria','TURBELIN Pierre','VALETTE Sophie','LU Ines','KABAB Simon','VEILLON Pascal']
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
      data: []
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
      data: []
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
      data: []
    },
  ]
};

option && myChart.setOption(option);
