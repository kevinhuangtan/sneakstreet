var currentMousePos = 1;
var halfway = $(window).width()/2;

//find mouse position and show/hide buy-sell
$(document).mousemove(function(event) {
    currentMousePos = event.pageX;

    if (currentMousePos < halfway-200) {
		console.log('left');
		$('#buy').css('opacity','1');
		$('#sell').css('opacity','0');
	}
	else{
		if (currentMousePos > halfway+200) {
			console.log('right');
			$('#sell').css('opacity','1');
			$('#buy').css('opacity','0');
		}
		else{
			$('#buy').css('opacity','0');
			$('#sell').css('opacity','0');
		}
	}
});

//rotate shoe
$(document).mousemove(function(event) {
    currentMousePos = event.pageX;
    var x_transform = 180-currentMousePos/5;
    $('.display-shoe').css('-webkit-transform','rotateY('+x_transform+'deg)');

});

