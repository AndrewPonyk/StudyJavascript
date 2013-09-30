onmessage=function(e) {postMessage(longTimeRunningFunction(e.data));};

function  longTimeRunningFunction(n){
			var a=0.3;
			var b=100;
			
			for(var i=0;i<500000000;i++){
				a=i;
				b=1/i;
				var c=a+b;
				c=c/2;
				if(i%200000000==0) postMessage(i);
		
			}
			return 1;
		}	