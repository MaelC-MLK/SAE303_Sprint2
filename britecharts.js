import { M } from './js/model.js';

await M.init();

// const tab = [
//     { name: 'Caca', id: 1, quantity: 86, percentage: 5 },
//     { name: 'Pipi', id: 2, quantity: 300, percentage: 18 },
//     { name: 'Zizi', id: 3, quantity: 276, percentage: 16 },
//     { name: 'Radiant', id: 4, quantity: 195, percentage: 11 },
//     { name: 'Sparkling', id: 5, quantity: 36, percentage: 2 },
//     { name: 'Caca', id: 0, quantity: 814, percentage: 48 }
//   ];



const prof = ['adamczyk', 'crespin', 'lavefve', 'mora', 'guedira', 'moutat', 'springinsfeld'];

const tab = [];

const data = M.getEvents('mmi1').concat(M.getEvents('mmi2').concat(M.getEvents('mmi3')));

for (let ev of data) {
  console.log(ev);

  if (ev.enseignant == null || ev.enseignant.includes('adamczyk') || ev.enseignant.includes('crespin') || ev.enseignant.includes('lavefve') || ev.enseignant.includes('mora') || ev.enseignant.includes('guedira') || ev.enseignant.includes('moutat') || ev.enseignant.includes('springinsfeld')) {
    console.log('prof');
  } else {
    console.log('intervenant');
  }

  tab.push({ name: ev.title, quantity: 30 });

}

function createDonutChart() {
  let donutChart = britecharts.donut();

  donutChart
    .width(400)
    .height(300);

  d3.select('.js-donut-container').datum(tab).call(donutChart);

}

createDonutChart();


