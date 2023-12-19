import { M } from './js/model.js';
import * as echarts from 'echarts';



await M.init();


var tab = [
  "ADAM Fabrice", "ADAMCZYK Natacha", "AYMARD Adrien", "AYMARD Alain", "BABIN Valentin", "BERTHIER Hélène", "CHANTELOUP Amelin", "CHUPIN Suzanne", "CREDEVILLE Maxime", "CRESPIN Benoit", "DAL BELLO Marine", "DEMAISON Guillaume", "DUBREUIL Anne-Sophie", "DULAC Benoit", "FEYDI Philippe", "FIAMMETTI Deborah", "FLITTI Eric", "GERAUD Fabien", "GOUDARD Bérénice", "GRASSET Véronique", "GUEDIRA Réda", "JARDOU Thomas", "JAUFFRET Manon", "JOUY Maxime", "KABAB Simon", "LAFONT Mathieu", "LAVEFVE Valérie", "LASCAUD Raphaël", "LAZARE Jean-Cédric", "LE BAIL Emma", "LECOMTE Catherine", "LU Inès", "MARTY Thomas", "MONDOLLOT Rémi", "MORA Frédéric", "MOUTAT Audrey", "NENIN Cédric", "PAILLIER Stéphane", "PINAUD Anaïs", "PORRO Heinich", "PORTAL Nicolas", "SABOURIN Erwan", "SINCLAIR Diego", "SPRINGINSFELD Denis", "THARAUD Sébastien", "TZVETKOVA Maria", "TURBELIN Pierre", "VALETTE Sophie", "VEILLON Pascal"
];
let allProf = {};
const data = M.getEvents('mmi1').concat(M.getEvents('mmi2').concat(M.getEvents('mmi3')));


var app = {};

var chartDom = document.getElementById('bar-label-charts');
var myChart = echarts.init(chartDom);
var option;

const posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight'
];
app.configParameters = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    }
  },
  position: {
    options: posList.reduce(function (map, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: {
    min: 0,
    max: 100
  }
};
app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
    const labelOption = {
      rotate: app.config.rotate,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      position: app.config.position,
      distance: app.config.distance
    };
    myChart.setOption({
      series: [
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        }
      ]
    });
  }
};
const labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 16,
  rich: {
    name: {}
  }
};
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['CM', 'TD', 'TP', 'SAÉ']
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['semestre 1', 'semestre 2', 'semestre 3', 'semestre 4', 'semestre 5', 'semestre 6']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'CM',
      type: 'bar',
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: 'CM'
      },
      data: []
    },
    {
      name: 'TD',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'TD'
      },
      data: []
    },
    {
      name: 'TP',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'TP'
      },
      data: []
    },
    {
      name: 'SAÉ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'SAÉ'
      },
      data: []
    }
  ]
};

for (let ev of tab) {
    allProf[ev] = data.filter((event) => { return event.title.includes(ev) });
  }
console.log(allProf);




option && myChart.setOption(option);