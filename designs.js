// Select color input
// Select size input


function makeGrid() {

// run makeGrid funtion
	console.log('Running makeGrid');
	var height, width, color, canvas;

	height = $("#inputHeight").val();
	width = $("#inputWeight").val();
	canvas = $("#pixelCanvas");
	
	canvas.children().remove();

	for (var i = 0; i < height; i++) {
		canvas.append("<tr> </tr>");
	};

	rows = $("tr");
	for (var j = 0; j < width; j++) {
		rows.append("<td> </td>");
	};

	cell = canvas.find("td");
	cell.click(function() {
		color = $("#colorPicker").val();
		$(this).attr("bgcolor", color);

	})

}

//tigger markGrid function when users click on submit
$("#sizePicker").submit(function(event){
	event.preventDefault();
	makeGrid();
})

