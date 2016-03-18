'use strict'

var jsonTest = { "families": [{
				"id": 1,
				"firstName": "Sarah",
				"lastName": "Scott"
			}, {
				"id": 2,
				"firstName": "Jeremy",
				"lastName": "Scott"
			}, {
				"id": 3,
				"firstName": "Min",
				"lastName": "Scott"
			}, {
				"id": 4,
				"firstName": "Sarah",
				"lastName": "Smith"
			}, {
				"id": 5,
				"firstName": "Jeremy",
				"lastName": "Smith"
			}, {
				"id": 6,
				"firstName": "Min",
				"lastName": "Smith"
			}]
		}

//var js = JSON.parse(jsonTest);
var parsedJSON = require('./families.json');
console.log(parsedJSON);
	
function findObjects (field, value){
	//var object = [];
	var json = jsonTest.families;
	for(var each in json){
		for(var what in json[each]){
			if(what === field){
				//console.log(field);
				if(json[each][what] === value){
					console.log(json[each]);
				}
			}
		}
		//if(jsonTest.families[each].field === value){
			//console.log(value);
		//}
	}
}

findObjects("lastName", "Smith");


