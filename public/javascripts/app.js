$(function(){
	$('a').click(function(evt){
		evt.preventDefault();
	});

	$('.drive-forward').click(function(evt){
		$.ajax({
		  url: "/drive-forward",
		}).done(function() {
			console.log('driving');
		});
	});

	$('.turn-right').click(function(evt){
		$.ajax({
		  url: "/turn-right",
		}).done(function() {
			console.log('turned right');
		});
	});

	$('.turn-left').click(function(evt){
		$.ajax({
		  url: "/turn-left",
		}).done(function() {
			console.log('turned left');
		});
	});

	$('.crazy-eyes').click(function(evt){
		$.ajax({
		  url: "/crazy-eyes",
		}).done(function() {
			console.log('crazy eyed');
		});
	});

	$('.dance-robot').click(function(evt){
		$.ajax({
		  url: "/dance",
		}).done(function() {
			console.log('dancing');
		});
	});

	$('.stop').click(function(evt){
		$.ajax({
		  url: "/stop",
		}).done(function() {
			console.log('stop');
		});
	});
});