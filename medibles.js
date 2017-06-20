$(document).ready(function() {

	/* function for rounding the final amount in grams */

	function round(value, precision) {
    	var multiplier = Math.pow(10, precision || 0);
    	return Math.round(value * multiplier) / multiplier;
	}

	/* display on relevant element and remove uneeded ones from the DOM */

	$('#grams').click(function(event){
		$('#perportion, #howmany').fadeOut(function(event) {
			$('#formblock, #ec, #tds, #nd, #gobutton').fadeIn();
			$('#grams').removeClass('question').addClass('deadquestion');
		});
		
	});

	$('#perportion').click(function(event){
		$('#formblock, #aoc, #ec, #nd, #gobutton').show();
	});

	$('#howmany').click(function(event){
		$('#formblock, #aoc, #ec, #gobutton, #tds').show();
	});

	/* calculate the amount of cannabis needed for the recipe */

	$('#medibles').on('submit', function(g) {
		g.preventDefault();
		if ($('#aoc').css('display') == 'none') {
			potency = parseInt($('input[name="percent"]').val()) / 100;
			numdoses = parseInt($('input[name="doses"]').val());
			size = parseInt($('input[name="size"]').val());
			amount = ((size * numdoses) / potency) / 1000;
			console.log(round(amount,1));
		} else if ($('#tds').css('display') == 'none') {
			potency = parseInt($('input[name="percent"]').val()) / 100;
			numdoses = parseInt($('input[name="doses"]').val());
			amount = parseInt($('input[name="grams"]').val()) * 1000;
			size = (amount * potency) / numdoses;
			console.log(round(size,1));
		} else if ($('#nd').css('display') == 'none') {
			potency = parseInt($('input[name="percent"]').val()) / 100;
			size = parseInt($('input[name="size"]').val());
			amount = parseInt($('input[name="grams"]').val()) * 1000;
			numdoses = (amount * potency) / size;
			console.log(round(numdoses,0));
		}
	});
});