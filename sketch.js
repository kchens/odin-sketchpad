$(document).ready(function(){
	grid();
});


var grid = function (options) {

	for ( i=1; i<=16; i++) {
		for ( k=1; k<=16; k++) {
			$('#container').append('<div class="box"></div>');
		}
		$('#container').append('<div class="newrow"></div>');
	}

	$('.box').hover(function(){
		//switch( options ){
		//	case 1:
				$(this).addClass('.litbox');
		//		break;
		//	}
		});

//	$('.box').hover(function(){
//		if ( $("this")
//		$('.box').css("background-color","white");
//	});
};