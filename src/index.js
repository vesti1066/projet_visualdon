import 'graph.js';
import DATA from '../data/data2.js';
import Chart from 'chart.js';
import * as R from 'ramda';

let ctx = $('#myChart');

$("button").on('click', event => {


    let type = $(event.currentTarget).data();

/*  let imp = DATA.find(d => d.nom === type.name)
                  .imp;
    let exp = DATA.find(d => d.nom === type.name)
                  .exp;
*/
    let imp = R.find(d => d.nom === type.name, DATA).imp;
    let exp = R.find(d => d.nom === type.name, DATA).exp;
/*
    let imp = DATA.find(R.propEq('nom', type.name)).imp;    
    let exp = DATA.find(R.propEq('nom', type.name)).exp; 
*/ 
  

    let color = type.color;

    let attr1 = "Importation "+type.name;
    let attr2 = "Exportation "+type.name;

    if ($(event.currentTarget).hasClass("selected")) {
        $(event.currentTarget).removeClass("selected");   
        myChart.destroy();
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels:["2002", "2015", "2016", "2017"],
            }

});

   } else {
        $("button").removeClass("selected");
        $(event.currentTarget).addClass("selected");
        myChart.destroy(); 
            myChart = new Chart(ctx, {

    type: 'line',
    data: {
      labels:["2002", "2015", "2016", "2017"],
      datasets: [
               {
          label: attr2,
          data: exp,
          backgroundColor: [
          'rgba(128, 128, 128, 0.5)',
          ],
          borderColor: [
          'rgba(128, 128, 128, 0.5)',
          ],

        },
        {
          label: attr1,
          data: imp,
          backgroundColor: [
          color
          ],
          borderColor: [
          color
          ],
          borderWidth: 5
        },

      ]
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
   };

});

   let myChart = new Chart(ctx, {

    type: 'line',
    data: {
      labels:["2002", "2015", "2016", "2017"],
    }

});



$("li").on('mouseover', event => {
  $(event.currentTarget).addClass("selected")
});

$("li").on('mouseleave', event => {
  $(event.currentTarget).removeClass("selected")
});



