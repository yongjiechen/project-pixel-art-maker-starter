// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {

// Your code goes here!


	console.log('Running makeGrid');
	var height, width, color, canvas;

	height = $("#inputHeight").val();
	width = $("#inputWeight").val();
	canvas = $("#pixelCanvas");
	
	//canvas.children().remove();

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

$("#sizePicker").submit(function(event){
	event.preventDefault();
	makeGrid();
})

