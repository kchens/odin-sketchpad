var num_squares = function(option) {
	$('#container').html("");


	var x = prompt("Enter a number from 1-64");

	if (x >= 1 && x <= 64) {

		var square_size = $('#container').width()/x -2;

			for (var i=1; i<=x; i++) {
				for (var k=1; k<=x; k++) {
					$('#container').append('<div class="box"></div>');
				}
				$('#container').append('<div class="newrow"></div>');
			}

			$('.box').css('width', square_size);
			$('.box').css('height', square_size);


			$('.box').mouseenter(function(){
				$(this).addClass('litbox');
			});
		}
	else {
		alert("Hail no.");
	}
}