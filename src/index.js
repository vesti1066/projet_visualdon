import DATA from '../data/data2.js';
import Chart from 'chart.js';
import * as R from 'ramda';

let ctx = $('#myChart');

let typeTab = [];
let sort = 'imp';
let x = [];
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels:["2000/02*", "2015", "2016", "2017"],
    }
});

const getData = ({nom}) => R.find(d => d.nom === nom, DATA);
const createCharteImp = ({imp, nom, couleur}) => ({
  label: nom,
  data: imp,
  borderColor: [
  couleur,
  ],
  backgroundColor: [
'rgba(128, 128, 128, 0)',
  ],
  borderWidth: 4
});

const createCharteExp = ({exp, nom, couleur}) => ({
  label: nom,
  data: exp,
  borderColor: [
  couleur,
  ],
  backgroundColor: [
'rgba(128, 128, 128, 0)',
  ],
  borderWidth: 4
})

$("#first > button").on('click', event => {

    let type = $(event.currentTarget).data();

    if ($(event.currentTarget).hasClass("selected")) {
    $(event.currentTarget).removeClass("selected");
    let pos = typeTab.indexOf(type.name);
    typeTab.splice(pos, 1);
        
   } else {
        $(event.currentTarget).addClass("selected");
        typeTab.push({
          nom : type.name,
          couleur: type.color});
   };

  if (sort === 'exp') {
    x = typeTab.map(fruit => ({
    ...fruit,
    ...getData(fruit)
   }))
   .map(createCharteExp);
      };

   if (sort === 'imp') {
    x = typeTab.map(fruit => ({
    ...fruit,
    ...getData(fruit)
   }))
   .map(createCharteImp);
      };

   $("button").trigger('change');   

});

$("li").on('mouseover', event => {
  $(event.currentTarget).addClass("selected")
});

$("li").on('mouseleave', event => {
  $(event.currentTarget).removeClass("selected")
});

$(".sort").on('click', event => {


  $('.sort').removeClass("selected");
  $(event.currentTarget).addClass("selected"); 

  sort = $(event.currentTarget).data().sort; 

  if (sort === 'exp') {
    x = typeTab.map(fruit => ({
    ...fruit,
    ...getData(fruit)
   }))
   .map(createCharteExp);
      };

   if (sort === 'imp') {
    x = typeTab.map(fruit => ({
    ...fruit,
    ...getData(fruit)
   }))
   .map(createCharteImp);
      };    

  $("button").trigger('change');
  
});

$("button").on('change', event => {

   myChart.destroy();
  
   myChart = new Chart(ctx, {

    type: 'line',
    data: {
      labels:["2000/02*", "2015", "2016", "2017"],
      datasets: x
    },
    options: {
        legend: {
            labels: {
                fontSize: 16,
            }
        },
        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        labelString: "Tonnes",
                    },
                }
            ],
        },

    }

});

});


