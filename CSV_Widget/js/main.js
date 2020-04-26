'use strict';

// Example object
/*var object = {

	dates :
		["27.7", "28.7", "29.7", "30.7", "31.7", "1.8", "2.8", "3.8", "4.8", "5.8", "6.8"],

	values : {
		"name1" : [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, " "],
		"name2" : [10, 9, 8, 7, 6, 5, " ", 4, 3, 2, 1],
		"name3" : [" ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	}
}*/

window.onload=function() {
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Clear widget";
	document.body.appendChild(btn);
	btn.onclick = async function() {
		document.body.innerHTML = "";
		document.body.appendChild(btn);
	}
}


function createLinkButton(content) {
	// Creates button
	// onClick creates downloadable csv file


	// Download file button
	var linkBtn = document.createElement("BUTTON");
	linkBtn.innerHTML = "download file";
	linkBtn.onclick = function() {
		var encodedUri = encodeURI(content);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "file.csv");
		document.body.appendChild(link);
		link.click();
	}
	return linkBtn;
}


function main(objectArg) {
	/*
		Takes object containing
		dates : ["1.1", "2.1"],

		values : {
			[{ name : name,
				data : data,
		}]
		}
		Creates .csv file and provides downloadable file.
	*/
	console.log("Tas");
	console.log(objectArg.values);
	console.log(objectArg);
	var maxSize = objectArg.dates.length;
	var dates = objectArg.dates;
	var values = objectArg.values;
	var csvContent = "data:text/csv;charset=utf-8,";
	csvContent += "\r\n" + "dates" + ",";
	

	// Creates real timestamps
	var minDate = objectArg.values[0][0].data[0][0];
	console.log(minDate);
	for(var i = 0; i < values[0].length; i++) {
		if(values[0][i].data[0][0] < minDate) {
			minDate = values[0][i].data[0][0];
		}
	}

	// Sets all the names to first line
	for(var i = 0; i < values.length; i++) {
		for (var j = 0; j < values[i].length; j++) {
			csvContent += values[i][j].name + ",";
		}
	}
	
	csvContent += "\r\n";
	for(var i = 0; i < maxSize; i++) {
		// Checks if dates contains illegal characters
		/*if(dates[i].includes(",")) {
			var nDate = dates[i].replace(/,/g, "-");
		}*/
		var nDate = dates[i].replace(/,/g, "-");
		csvContent += nDate + ",";
		// csvContent += dates[i] + ",";
		for(var j = 0; j < values.length; j++) {
			for (var k = 0; k < values[j].length; k++) {
				csvContent += values[j][k].data[i][1] + ",";
			}
		}
		csvContent += "\r\n";
	}
	var btn = createLinkButton(csvContent);
	document.body.appendChild(btn);
}


MashupPlatform.wiring.registerCallback('createCSV', function(content) {main(content)});
