$(document).ready(function() {
	$("#printButton").removeAttr("onclick");

	var createFriendlyPeriod = function () {
		var periodSection = $("div:contains('Period')").closest(".selectionBoxRow");
		var periodInputBox = "<input id='periodInputBox' type='text'>";
		periodSection.append(periodInputBox);
	}

	var resetPeriod = function () {
		$("#periodInputBox").remove();
	}

	$("#printButton").click(function(e) {
		e.stopPropagation();
		e.preventDefault();

		createFriendlyPeriod();

		$("span:contains('Value')").closest("tr").hide();

		window.print();

		$("span:contains('Value')").closest("tr").show();
		resetPeriod();
	});
});
