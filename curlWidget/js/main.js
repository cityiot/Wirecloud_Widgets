'use strict';
/* gets Following information in order to create curl
	Does used URL and used methods get implemented here?
{
	{
		"exampleName": {
			Headers : {
				header1,
				...
				headerX
			},
			url: url,
		},
		"exampleName2": {
			Headers : {
				header1,
				...
				headerX
			},
			url: url,
			method: methord,
			url2: url2,
		},
	}
}
*/
// Tarvitaan jos halutaan poistaa curleja yksittäin

/*{
	Headers : {
		header1,
		...
		headerX
	},
	url: url,
},*/


function getInfo(info) {
	var curl = "curl -X 'GET'";
	var headers = Object.keys(info.headers);

	for(var j = 0; j < headers.length; j++) {
		if (headers[j] === "Accept" || headers[j] === "Platform-ApiKey" ||
		headers[j] === "Fiware-Service" || headers[j] === "Fiware-ServicePath") {
			// Temporary if-else to hide Apikey
			if (headers[j] === "Platform-ApiKey") {
				curl = curl + " -H '" + headers[j] + ": " + "***Hidden ApiKey***" +  "'";
			} else {
				curl = curl + " -H '" + headers[j] + ": " + info.headers[headers[j]] +  "'";
			}
		}
	}
	
	var curlText = document.createElement("TEXTAREA");
	curlText.innerHTML = curl + " '" + info.url + "'";
	curlText.style.width = (MashupPlatform.widget.context.get('widthInPixels') - 25) + "px";
	curlText.style.height = 60 + 'px';
	document.body.appendChild(curlText);
}

window.onload=function() {
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Clear widget";
	document.body.appendChild(btn);
	btn.onclick = async function() {
		document.body.innerHTML = "";
		document.body.appendChild(btn);
	}
}

MashupPlatform.wiring.registerCallback('printCurl', function(data) {getInfo(data)});
