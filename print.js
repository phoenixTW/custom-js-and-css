$(document).ready(function() {
	$("#printButton").removeAttr("onclick");

	var createFriendlyPeriod = function () {
		var periodSection = $("div:contains('Period')").closest(".selectionBoxRow");
		var periodInputBox = "<input id='periodInputBox' type='text'>";
	
		periodSection.append(periodInputBox);
	}

	var createFriendlyDataSet = function () {
		var dataSetLabel = $("div:contains('Data Set')").closest(".selectionBoxRow");
		var dataSetSelectedOption = $("#selectedDataSetId option:selected").text();
		var printFriendlyDataSetOption = "<span id='datasetOption'>" + dataSetSelectedOption + "</span>"
		
		dataSetLabel.append(printFriendlyDataSetOption);
	}

	var resetPeriod = function () {
		$("#periodInputBox").remove();
	}

	var resetDataSet = function () {
		$("#datasetOption").remove();
	}

	$("#printButton").click(function(e) {
		e.stopPropagation();
		e.preventDefault();

		createFriendlyDataSet();
		createFriendlyPeriod();

		$("span:contains('Value')").closest("tr").hide();

		window.print();

		$("span:contains('Value')").closest("tr").show();
		resetDataSet();
		resetPeriod();
	});
});
