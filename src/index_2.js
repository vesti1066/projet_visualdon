import 'graph.js';
import {bb} from 'billboard.js';
import DATA from '../data/data2.js';

let typeTab = [];

$("button").on('click', event => {

    let type = $(event.currentTarget).data();

	if ($(event.currentTarget).hasClass("selected")) {
   		$(event.currentTarget).removeClass("selected");
   		let pos = typeTab.indexOf(type.name);
   		typeTab.splice(pos, 1);
	    
   } else {
   		$(event.currentTarget).addClass("selected");
   		typeTab.push(type.name);
   };


    console.log(typeTab);

    let imp = DATA.find(d => d.nom === type.name).imp;
	let exp = DATA.find(d => d.nom === type.name).exp;

	console.log(imp.toJSON());

	

    bb.generate({
    bindto: "#lineChart",
    data: {
        columns: [
            ["importation "+type.name, imp[0], imp[1], imp[2], imp[3]],
            ["exportation "+type.name, exp[0], exp[1], exp[2], exp[3]]
        ],
        types: {
          importation: "line",
          exportation: "line"
        },
        colors: {
          importation: "red",
          exportation: "green"
        }
    }
});

});


let imp = [ 0, 0, 0, 0];
let exp =  [ 0, 0, 0, 0];

bb.generate({
    bindto: "#lineChart",

    data: {
        columns: [
            ["importation", imp[0], imp[1], imp[2], imp[3]],
            ["exportation", exp[0], exp[1], exp[2], exp[3]]
        ],
        types: {
          importation: "line",
          exportation: "line"
        },
        colors: {
          importation: "red",
          exportation: "green"
        }
    }
});

