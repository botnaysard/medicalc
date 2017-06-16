$(document).ready(function() {

	/* function for rounding the final amount in grams */

	function round(value, precision) {
    	var multiplier = Math.pow(10, precision || 0);
    	return Math.round(value * multiplier) / multiplier;
	}

	$('#grams').click(function(event){
		$('#gramscalc').show();
	});

	$('#perportion').click(function(event){
		$('#dosecalc').show();
	});

	$('#howmany').click(function(event){
		$('#portionscalc').show();
	});

	/* calculate the amount of cannabis needed for the recipe */

	$('#gramscalc').on('submit', function(g) {
		g.preventDefault();
		var gpotency = parseInt($('input[name="gpercent"]').val()) / 100;
		var gnumdoses = parseInt($('input[name="gdoses"]').val());
		var gsize = parseInt($('input[name="gsize"]').val());
		var gamount = ((gsize * gnumdoses) / gpotency) / 1000; 
		console.log(round(gamount,1));
	});

	/* calculate the dosage per portion */

	$('#dosescalc').on('submit', function(d) {
		d.preventDefault();
		var dpotency = parseInt($('input[name="dpercent"]').val()) / 100;
		var dnumdoses = parseInt($('input[name="ddoses"]').val());
		var damount =  parseInt($('input[name="dgrams"]').val());
		var dsize = (damount * dpotency) / dnumdoses;  
		console.log(round(dsize,0));
	});
});


	

