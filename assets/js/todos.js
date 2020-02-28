// Check off specific Todos ny clicking
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

//Click on X to delete Todo
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//Enter new Todo
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//Grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val('');
		//Create a new li and add to ul
		$('ul').append('<li><span><i class="fas fa-trash"></i></span> ' + todoText + '</li>');
	}
});

$('.fa-plus').click(function() {
	$("input[type='text']").fadeToggle();
});
