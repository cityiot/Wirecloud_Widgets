"use strict"

window.onload=function() {
    let startDate = document.getElementById("startDate");
    let endDate = document.getElementById("endDate");
    let lastN = document.getElementById("lastN");
    let minutes = document.getElementById("minutes");
    let date1, date2, nValue, minutes2, string;

    startDate.addEventListener("change", function() {date1 = startDate.value});
    endDate.addEventListener("change", function() {date2 = endDate.value});
    lastN.addEventListener("change", function() {nValue = lastN.value});
    minutes.addEventListener("change", function() {minutes2 = minutes.value});

    document.querySelector("#btnTimePer").addEventListener("click", function() {
		// "?aggrMethod=" + aggrMethod + "&aggrPeriod=" + aggrPeriod;
			//		cometUrl += "&dateFrom=" + inputDates[0] + "&dateTo=" + inputDates[1]; 
		console.log(date1);
		console.log(date2);
		string = "?aggrMethod=" + "max" + "&aggrPeriod=" + "hour";
		string += "&dateFrom=" + date1 + "&dateTo=" + date2;

        document.getElementById("headTimePer").style.color = "green";
        document.getElementById("headLastN").style.color = "black";
        document.getElementById("headMinutes").style.color = "black";
		
		console.log(string);

        // MashupPlatform.wiring.pushEvent("Dates", datesList);
		MashupPlatform.wiring.pushEvent("DatesInfo", string);
    })

    document.querySelector("#btnLastN").addEventListener("click", function() {
        document.getElementById("headLastN").style.color = "green";
        document.getElementById("headTimePer").style.color = "black";
        document.getElementById("headMinutes").style.color = "black";
		
		string = "?lastN=" + nValue;

		console.log(string);
        MashupPlatform.wiring.pushEvent("DatesInfo", string);
    })

}

