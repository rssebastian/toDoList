// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
	console.log("hi");
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(2000, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Add task to list
$("input[type='text']").on("keypress", function() {
	if (event.keyCode === 13) {
		
		// Append the task text to the list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $("input").val() + "</li>");
		
		// Clear the input
		$("input").val("");
	}
});

// Toggle with + button
$("#toggle").on("click", function() {
	$("input[type='text']").fadeToggle();
})