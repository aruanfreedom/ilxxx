// ---------
//  SVG B
// ---------

  var snapB = Snap("#svg");

  // SVG B - "Squiggly" Path
  var myPathB = snapB.path("M15.561,89.632c0-16.529,47.899-48.966,61.333-58.595c10.678-7.653,29.152-15.67,41.667-19.667c16.505-5.271,59.578-6.562,76.834-5c13.321,1.206,46.591,15.411,58.5,21.5c15.346,7.845,33.981,26.311,46.166,38.5c9.825,9.829,25.168,38.885,31,51.5c7.033,15.214,9.192,41.71,11.334,58.333c0.311,2.416-1.007,28.351-7.5,48.833c-6.269,19.773-15.763,40.229-17.167,42.667c-6.912,12-20.376,33.384-29.833,43.5c-10.613,11.353-38.49,27.866-52.334,34.928c-11.046,5.634-35.7,10.925-48,12.5c-11.283,1.445-34.242,1.624-45.5,0c-14.445-2.084-42.628-10.651-56-16.5c-8.269-3.616-24.004-12.799-31-18.5c-9.328-7.602-25.027-24.983-30.375-35.762c-0.621-1.252-2.875-7.353-2.875-8.75").attr({
	id: "squiggle",
	fill: "none",
	strokeWidth: "4",
	strokeMiterLimit: "10",
	strokeDasharray: "9 9",
	strokeDashOffset: "988.01"
 });

// SVG B - Draw Path
var lenB = myPathB.getTotalLength();


  // SVG B - Circle
  var CircleB = snapB.circle(16,16,8);
  CircleB.attr({
	fill: "#fff"
  });

  setTimeout( function() {
	Snap.animate(0, lenB, function( value ) {
		movePoint = myPathB.getPointAtLength( value );
		CircleB.attr({ cx: movePoint.x, cy: movePoint.y }); // move along path via cx & cy attributes
	}, 2500,mina.easeinout);
  });