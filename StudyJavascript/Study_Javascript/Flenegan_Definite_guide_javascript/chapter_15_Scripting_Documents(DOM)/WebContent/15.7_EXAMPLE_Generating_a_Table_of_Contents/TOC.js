/*window.onload=function(){
	alert("hello");
}*/

	onload=function() { // Anonymous function defines a local scope
		// FIND the TOC element 
		// if there isn't  one ,create one at the start of the document
		var toc = document.getElementById("TOC");
		if(!toc){
			toc=document.createElement("div");
			toc.id="TOC";
			document.body.insertBefore(toc, document.body.firstChild);
		};
		
		var headings;
		if(document.querySelectorAll) // can we do it the easy way ?
			headings=document.querySelectorAll("h1,h2,h3,h4,h5,h6");
		
		var sectionNumbers=[0,0,0,0,0,0];
		
		for(var h=0;h<headings.length;h++){
			var heading=headings[h];
			
			if(heading.parentNode==toc)continue;
			
			// h1=>1 , h2=>2...
			var level=parseInt(heading.tagName.charAt(1));
			if(isNaN(level) || level<1 || level>6)continue;
			
			sectionNumbers[level-1]++;
			for(var i =level;i<6;i++) sectionNumbers[i]=0;
			
			// now combine section numbers for all heading levels
			// to produce a section number like 2.3.1
			var sectionNumber=sectionNumbers.slice(0, level).join(".");
			
			// add the section number to the section header title
			// we place the number in a <span> to make it styleable
			var span=document.createElement("span");
			span.innerHTML=sectionNumber;
			heading.insertBefore(span,heading.firstChild);
			
			
			// wrap the heading in a nambe anchor so we can link o it
			var anchor=document.createElement("a");
			anchor.name="TOC"+sectionNumber;
			heading.parentNode.insertBefore(anchor,heading);
			anchor.appendChild(heading);
			
			// now create a link to this section
			var link=document.createElement("a");
			link.href="#TOC"+sectionNumber;
			link.innerHTML=heading.innerHTML;
			
			var entry=document.createElement("div");
			entry.className="TOCEntry TOCLevel"+level;
			entry.appendChild(link);
			toc.appendChild(entry);
			
			
		}
		alert('end');
	};