import * as echarts from 'echarts';
import { M } from './js/model.js';

await M.init();




var tab = [
  "ADAM Fabrice", "ADAMCZYK Natacha", "AYMARD Adrien", "AYMARD Alain", "BABIN Valentin", "BERTHIER Hélène", "CHANTELOUP Amelin", "CHUPIN Suzanne", "CREDEVILLE Maxime", "CRESPIN Benoit", "DAL BELLO Marine", "DEMAISON Guillaume", "DUBREUIL Anne-Sophie", "DULAC Benoit", "FEYDI Philippe", "FIAMMETTI Deborah", "FLITTI Eric", "GERAUD Fabien", "GOUDARD Bérénice", "GRASSET Véronique", "GUEDIRA Réda", "JARDOU Thomas", "JAUFFRET Manon", "JOUY Maxime", "KABAB Simon", "LAFONT Mathieu", "LAVEFVE Valérie", "LASCAUD Raphaël", "LAZARE Jean-Cédric", "LE BAIL Emma", "LECOMTE Catherine", "LU Inès", "MARTY Thomas", "MONDOLLOT Rémi", "MORA Frédéric", "MOUTAT Audrey", "NENIN Cédric", "PAILLIER Stéphane", "PINAUD Anaïs", "PORRO Heinich", "PORTAL Nicolas", "SABOURIN Erwan", "SINCLAIR Diego", "SPRINGINSFELD Denis", "THARAUD Sébastien", "TZVETKOVA Maria", "TURBELIN Pierre", "VALETTE Sophie", "VEILLON Pascal"
];
let allProf = {};
const dataAll = M.getEvents('mmi1').concat(M.getEvents('mmi2').concat(M.getEvents('mmi3')));
var chartDom = document.getElementById('heatmap-charts');
var myChart = echarts.init(chartDom, "dark");
var option;

console.log(dataAll);

// prettier-ignore
const hours = ["20h","19h","18h","17h","16h","15h","14h","13h","12h","11h","10h","9h","8h"];
// prettier-ignore
const days = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi"];
// prettier-ignore
const data = []
    .map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});
option = {
  tooltip: {
    position: 'bottom'
  },
  grid: {
    height: '80%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: days,
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: hours,
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 10,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '0%'
  },
  series: [
    {
      name: 'Cours',
      type: 'heatmap',
      data: data,
      label: {
        show: true
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};


// hour : un entier entre 0 et 23 qui détermine une tranche d'une heure (ex: 14 pour la tranche 14h-15h)
// start : un objet Date qui détermine l'heure de début d'un cours
// end : un objet Date qui détermine l'heure de fin d'un cours
// retourne la durée de l'intersection entre [start, end] et [hour, hour+1] en heures (0 si pas d'intersection)

let intersectByHour = function (hour, start, end){

  let interStart = new Date(start);
  interStart.setHours(hour);
  interStart.setMinutes(0);
  let interEnd = new Date(end);
  interEnd.setHours(hour+1);
  interEnd.setMinutes(0);
  
  // maintenant il faut déterminer s'il existe une intersection entre [interStart, interEnd] et les horaires du cours [start, end]
  
  if (interEnd<=start) // si l'heure de fin est avant l'heure de début du cours, pas d'intersection
  return 0;
  else if (interStart>=end) // si l'heure de début est après l'heure de fin du cours, pas d'intersection
  return 0;
  else{ // il existe une intersection entre [interStart, interEnd] et les horaires du cours [start, end]
  return ( Math.min(interEnd, end) - Math.max(interStart, start) ) / 1000 / 3600 ;
  // on prend le minimum des deux heures de fin et le maximum des deux heures de début
  // et on retourne la durée de l'intersection en heures
  }  
  }


  console.log(dataAll[0].end);

  console.log(intersectByHour(10, dataAll[0].start, dataAll[0].end));

  for(let i=0; i<days.length; i++){
    for(let j=0; j<hours.length; j++){
      let sum = 0;
      for(let k=0; k<dataAll.length; k++){
        sum += intersectByHour(j+8, dataAll[k].start, dataAll[k].end);
      }
      data.push([j+8, hours[j], sum]);
    }
  }

option && myChart.setOption(option);
