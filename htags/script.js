
	var tooltip;
	var tooltipContent = "";
	var mouse = {
		x : undefined,
		y : undefined
	}
	window.onload = function(){
		tooltip = document.createElement('span');
		tooltip.className = 'tooltip';
			
		
		window.onmousemove = function(e){
			mouse.x = e.pageX;
			mouse.y = e.pageY;
			tooltip.style.left = ( mouse.x+ 5 ) +'px';
			tooltip.style.top = ( mouse.y + 0 ) +'px';
			tooltip.innerHTML = tooltipContent;
		}
		document.body.appendChild(tooltip);
	}
			
	function setTooltip(obj){
		
		var id = obj.getAttribute('for');
		var checkbox = document.getElementById(id);
		if(!checkbox.checked){
			tooltip.style.visibility = 'visible' ; 
			var div = document.getElementById(id+'d');
			tooltipContent = "<pre>"+div.innerHTML+"</pre>";
		}else{
			
		}

	

	}

	function clearTooltip(obj){
		//alert(obj.getAttribute('for'));
		tooltipContent = "";
		tooltip.style.visibility = 'hidden';

	}
		

