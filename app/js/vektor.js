// ---------
//  SVG B
// ---------

  var snapB = Snap("#svg");

  // SVG B - "Squiggly" Path
  var myPathB = snapB.path("M46,81.71973c0,0,23.04932-23.83203,34.74316-30.28906c7.10693-3.92529,34.22998-15.1001,49.18945-17.52686c21.49121-3.48633,57.96094-1.69434,57.96094-1.69385c0,0,28.70605,5.375,33.53906,6.62842c2.28906,0.59326,16.20898,6.13672,27.92773,14.48486c13.02344,9.27734,23.84277,21.41992,23.84277,21.41992l16.16699,19.73877l12.38379,25.35449l10.49121,25.01416l4.12695,28.07666l-5.84668,52.23975l-21.66992,44.07324l-30.61621,32.50098l-48.50195,25.86426l-47.81396,11.06152l-48.84619-11.06152l-40.41846-19.39844l-21.32666-20.58887").attr({
	id: "squiggle",
	fill: "none"
 });

// SVG B - Draw Path
var lenB = myPathB.getTotalLength();


  // SVG B - Circle
  //var CircleB = snapB.circle(40, 80, 5);
  var CircleB = snapB.image("../img/shine-svg.png", 0, 0, 1000);

  CircleB.attr({
	  id : "shine"
  });

  setTimeout( function() {
	Snap.animate(0, lenB, function( value ) {
		movePoint = myPathB.getPointAtLength( value );
		CircleB.attr({ x: movePoint.x, y: movePoint.y }); // move along path via cx & cy attributes
	}, 2500,mina.easeinout);
  });