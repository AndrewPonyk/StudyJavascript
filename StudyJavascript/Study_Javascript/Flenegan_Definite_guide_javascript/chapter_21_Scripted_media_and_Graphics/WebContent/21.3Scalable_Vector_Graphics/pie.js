/**
 * Create an <svg> element and draw a pie chart into it.
 * Arguments:
 *   data: an array of numbers to chart, one for each wedge of the pie.
 *   width,height: the size of the SVG graphic, in pixels
 *   cx, cy, r: the center and radius of the pie
 *   colors: an array of HTML color strings, one for each wedge
 *   labels: an array of labels to appear in the legend, one for each wedge
 *   lx, ly: the upper-left corner of the chart legend
 * Returns: 
 *    An <svg> element that holds the pie chart.
 *    The caller must insert the returned element into the document.
 */
function pieChart(data,width,height,cx,cy,r,colors,labels,lx,ly){
	//alert("pie");
	
	var svgns="http://www.w3.org/2000/svg";
	
	var chart=document.createElementNS(svgns,"svg:svg");
	
	chart.setAttribute("width", width);
	chart.setAttribute("height", height);
	chart.setAttribute("viewbox", "0 0 "+width+" "+height);
	
	var total=0;
	for(var i=0;i<data.length;i++) total+=data[i];
	//
	
	var angles=[];
	
	for(var i=0;i<data.length;i++) angles[i]=data[i]/total*Math.PI*2;;
	 								
	//Loop through each slice or pie
	startangle=0;
	for(var i=0;i<data.length;i++){
		var endangle=startangle+angles[i];
		
		//Compute two point where our wedge intersects the circle
		//These formulas are chosen so that an angle of 0 is at 12 o'clock
		//and positive angles increase clockwise.
		var x1=cx+r*Math.sin(startangle);
		var y1=cy-r*Math.cos(startangle);
		var x2=cx+r*Math.sin(endangle);
		var y2=cy-r*Math.cos(endangle);
		
		//THis is flag for angles larger than than a half circle
		//It is required by the SVG arc drawing component
		
		var big=0;
		if( endangle-startangle >Math.PI) big=1;
		
		//We describe a wedge with and <path> element 
		//Notice that we crate this with createElement()
		var path=document.createElementNS(svgns,"path");
		
		//This string holds the path details
		var d="M "+cx+","+cy+
			" L "+x1+","+y1+
			" A "+r+","+r+
			" 0 "+big +	" 1 "+
			x2+","+y2
			+" Z";
		path.setAttribute("d",d);
		path.setAttribute("fill",colors[i]);
		path.setAttribute("stroke","black");
		path.setAttribute("stroke-with","2");
		chart.appendChild(path);
		
		
		
		startangle=endangle;
		
		
		
		
		
		
		var icon = document.createElementNS(svgns, "rect");
        icon.setAttribute("x", lx);             // Position the square
        icon.setAttribute("y", ly + 30*i);
        icon.setAttribute("width", 20);         // Size the square
        icon.setAttribute("height", 20);
        icon.setAttribute("fill", colors[i]);   // Same fill color as wedge
        icon.setAttribute("stroke", "black");   // Same outline, too.
        icon.setAttribute("stroke-width", "2");
        chart.appendChild(icon);                // Add to the chart
        // And add a label to the right of the rectangle
        var label = document.createElementNS(svgns, "text");
        label.setAttribute("x", lx + 30);       // Position the text
        label.setAttribute("y", ly + 30*i + 18);
        // Text style attributes could also be set via CSS
        label.setAttribute("font-family", "sans-serif");
        label.setAttribute("font-size", "16");
        // Add a DOM text node to the <svg:text> element
        label.appendChild(document.createTextNode(labels[i]));
        chart.appendChild(label);               // Add text to the chart
	}
	
	return chart;
	
}
