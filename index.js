'use strict'

//var jsonTest = require('./families.json');
var file = process.argv[2];
var field = process.argv[3];
var value = process.argv[4];
//console.log(parsedJSON);
	
function findObjects (){
	var jsonTest = require("./"+file);
	var json = jsonTest.families;
	var fieldMatchFound = false;
	var valueMatchFound = false;
	for(var each in json){
		for(var what in json[each]){
			if(what === field){
				fieldMatchFound = true;
				//console.log(field);
				if(json[each][what] === value){
					console.log(json[each]);
					valueMatchFound = true;
				}
			}
		}
	}
	if(fieldMatchFound === false || valueMatchFound === false){
		console.log("Incorrect field entered, please try again");
	}
}
findObjects();

function newObject (){

}

newObject(function(){

});

