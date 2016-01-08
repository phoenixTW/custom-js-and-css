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

	var checkBoxDataSet = function () {
		var dataSetLabel = $("div:contains('Data Set')").closest(".selectionBoxRow");
		var datasetOption = document.querySelectorAll('#selectedDataSetId option');

		var printFriendlyDataSetCheckboxes = "";
		for(var counter = 1; counter < datasetOption.length; counter++) {
			printFriendlyDataSetCheckboxes += ("<input type='checkbox'><label class='customCheckbox'>" + $(datasetOption[counter]).text() + "</label>");
		}

		printFriendlyDataSetCheckboxes = "<span id='dataSetCheckBoxes'>" + printFriendlyDataSetCheckboxes + "</span>";

		dataSetLabel.append(printFriendlyDataSetCheckboxes);
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
