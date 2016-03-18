'use strict'

var jsonTest = require('./families.json');
var field = process.argv[2];
var value = process.argv[3];
//console.log(parsedJSON);
	
function findObjects (){
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
	}
}
findObjects();


