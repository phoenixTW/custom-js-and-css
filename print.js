$(document).ready(function() {
	$("#printButton").removeAttr("onclick");

	var createFriendlyPeriod = function () {
		var periodSection = $("div:contains('Period')").closest(".selectionBoxRow");
		var periodInputBox = "<input id='periodInputBox' type='text'>";
	
		periodSection.append(periodInputBox);
	}

	/*var createFriendlyDataSet = function () {
		var dataSetLabel = $("div:contains('Data Set')").closest(".selectionBoxRow");
		var dataSetSelectedOption = $("#selectedDataSetId option:selected").text();
		var printFriendlyDataSetOption = "<span id='datasetOption'>" + dataSetSelectedOption + "</span>"
		
		dataSetLabel.append(printFriendlyDataSetOption);
	}*/

	var checkBoxDataSet = function () {
		var dataSetLabel = $("div:contains('Data Set')").closest(".selectionBoxRow");
		var datasetOption = document.querySelectorAll('#selectedDataSetId option');
		//console.log(datasetOption);

		var printFriendlyDataSet = "";
		for(var counter = 1; counter < datasetOption.length; counter++) {
			printFriendlyDataSet += ("<input type='checkbox'>" + $(datasetOption[counter]).text() + "&nbsp;");
		}

		// console.log(printFriendlyDataSet);
		printFriendlyDataSet = "<span id='dataSetCheckBoxes'>" + printFriendlyDataSet + "</span>";

		dataSetLabel.append(printFriendlyDataSet);
	}

	var resetPeriod = function () {
		$("#periodInputBox").remove();
	}

	var resetDataSet = function () {
		$("#dataSetCheckBoxes").remove();
	}

	$("#printButton").click(function(e) {
		e.stopPropagation();
		e.preventDefault();

		checkBoxDataSet();
		//createFriendlyDataSet();
		createFriendlyPeriod();

		$("span:contains('Value')").closest("tr").hide();

		window.print();

		$("span:contains('Value')").closest("tr").show();
		resetDataSet();
		resetPeriod();
	});
});
