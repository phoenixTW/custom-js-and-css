var snippet = {
	getHeaderUserName: function () {
		var userNameSection = "<div class='selectionLabel'>Data Entry User Name</div> <input class='customTextBox' type='textbox'>";
		return "<div id='userNameRow' class='selectionBoxRow'>" + userNameSection + "</div>";
	},

	getHeaderPrintFriendlyPeriod: function () {
		return "<div id='dateSection' class='selectionBoxRow'><div class='selectionLabel'>Date/s</div> <input class='customTextBox' type='textbox'> </div>";
	}
}

$(document).ready(function() {
	$("#printButton").removeAttr("onclick");

	var createFriendlyPeriod = function () {
		var periodSection = $(".selectionBoxRow:contains('Period')");
		periodSection.hide();
		$("#selectionBox").append(snippet.getHeaderPrintFriendlyPeriod());
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
	var dataEntryUserName = function() {
		$("#selectionBox").append(snippet.getHeaderUserName());
	}

	var resetPeriod = function () {
		$("#dateSection").remove();
		$(".selectionBoxRow:contains('Period')").show();
	}

	var resetDataSet = function () {
		$("#dataSetCheckBoxes").remove();
	}

	var resetUserNameRow = function () {
		$("#userNameRow").remove();
	}



	$("#printButton").click(function(e) {
		e.stopPropagation();
		e.preventDefault();

		checkBoxDataSet();
		//createFriendlyDataSet();
		createFriendlyPeriod();
		dataEntryUserName();

		$("span:contains('Value')").closest("tr").hide();

		window.print();

		$("span:contains('Value')").closest("tr").show();
		resetDataSet();
		resetPeriod();
		resetUserNameRow();
	});
});
