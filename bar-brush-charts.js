import { M } from './js/model.js';
import * as echarts from 'echarts';



await M.init();


var tab = [
  "ADAM Fabrice", "ADAMCZYK Natacha", "AYMARD Adrien", "AYMARD Alain", "BABIN Valentin", "BERTHIER Hélène", "CHANTELOUP Amelin", "CHUPIN Suzanne", "CREDEVILLE Maxime", "CRESPIN Benoit", "DAL BELLO Marine", "DEMAISON Guillaume", "DUBREUIL Anne-Sophie", "DULAC Benoit", "FEYDI Philippe", "FIAMMETTI Deborah", "FLITTI Eric", "GERAUD Fabien", "GOUDARD Bérénice", "GRASSET Véronique", "GUEDIRA Réda", "JARDOU Thomas", "JAUFFRET Manon", "JOUY Maxime", "KABAB Simon", "LAFONT Mathieu", "LAVEFVE Valérie", "LASCAUD Raphaël", "LAZARE Jean-Cédric", "LE BAIL Emma", "LECOMTE Catherine", "LU Inès", "MARTY Thomas", "MONDOLLOT Rémi", "MORA Frédéric", "MOUTAT Audrey", "NENIN Cédric", "PAILLIER Stéphane", "PINAUD Anaïs", "PORRO Heinich", "PORTAL Nicolas", "SABOURIN Erwan", "SINCLAIR Diego", "SPRINGINSFELD Denis", "THARAUD Sébastien", "TZVETKOVA Maria", "TURBELIN Pierre", "VALETTE Sophie", "VEILLON Pascal"
];

let allProf = {};
const data = M.getEvents('mmi1').concat(M.getEvents('mmi2').concat(M.getEvents('mmi3')));
var chartDom = document.getElementById('brush-bar');
var myChart = echarts.init(chartDom);
var option;

let xAxisData = [];
let data1 = [];
let data2 = [];
let data3 = [];
let data4 = [];
for (let i = 0; i < 10; i++) {
  xAxisData.push('Class' + i);
  data1.push(+(Math.random() * 2).toFixed(2));
  data2.push(+(Math.random() * 5).toFixed(2));
  data3.push(+(Math.random() + 0.3).toFixed(2));
  data4.push(+Math.random().toFixed(2));
}
var emphasisStyle = {
  itemStyle: {
    shadowBlur: 10,
    shadowColor: 'rgba(0,0,0,0.3)'
  }
};
option = {
  legend: {
    data: ['bar', 'bar2'],
    left: '10%'
  },
  brush: {
    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    xAxisIndex: 0
  },
  toolbox: {
    feature: {
      magicType: {
        type: ['stack']
      },
      dataView: {}
    }
  },
  tooltip: {},
  xAxis: {
    data: xAxisData,
    name: 'X Axis',
    axisLine: { onZero: true },
    splitLine: { show: false },
    splitArea: { show: false }
  },
  yAxis: {},
  grid: {
    bottom: 100
  },
  series: [
    {
      name: 'RESSOURCE',
      type: 'bar',
      stack: 'one',
      emphasis: emphasisStyle,
      data: data1
    },
    {
      name: 'SAE',
      type: 'bar',
      stack: 'one',
      emphasis: emphasisStyle,
      data: data2
    },
  ]
};
myChart.on('brushSelected', function (params) {
  var brushed = [];
  var brushComponent = params.batch[0];
  for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
    var rawIndices = brushComponent.selected[sIdx].dataIndex;
    brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
  }
  myChart.setOption({
    title: {
      backgroundColor: '#333',
      text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
      bottom: 0,
      right: '10%',
      width: 100,
      textStyle: {
        fontSize: 12,
        color: '#fff'
      }
    }
  });
});

for (let ev of tab) {
  allProf[ev] = data.filter((event) => { return event.title.includes(ev) });
}
















option && myChart.setOption(option);


