var HOURS = {
	onReady: function() {
		var i = 0;
		var substring = "",count = 0;

		
		function clock(){
			if(i == 3600){i=0;}
			i++;
			var elem = $(".donut");
			console.log(elem.html());
		  	var radius = elem.parent().parent().data("radius") * 4;

		  	elem.peity("donut", {
		    	colours: ["#C6D9FD", "#4D89F9"],
		    	radius: radius,
		    	innerRadius: elem.parent().parent().data("radius") * 2.8
		  	});
		  	count =  elem.html().search('/')
		  	substring = elem.html().substring(count,elem.html().length)	
			elem.html(i+substring);
			console.log(elem);
		} 
		clock();
		setInterval(function(){clock()}, 1000);	
	}

}
var MINUTES = {
	onReady: function() {
		var i = 0;
		var substring = "",count = 0;

		
		function clock(){
			if(i == 60){i=0;}
			i++;
			var elem = $(".circle");
			console.log(elem.html());
		  	var radius = elem.parent().parent().data("radius") * 2.8;

		  	elem.peity("pie", {
	  		  	fill: function(_, i, all) {
					var g = parseInt((i / all.length) * 255)
					return "rgb(255, " + g + ", 0)"},
		    	radius: radius
		  	});
		  	count =  elem.html().search('/')
		  	substring = elem.html().substring(count,elem.html().length)	
			elem.html(i+substring);
			console.log(elem);
		} 
		clock();
		setInterval(function(){clock()}, 1000);	
	}

}
var INNER_CIRCLE = {
	onReady: function() {
		var elem = $(".inner_circle");
		var radius = elem.parent().parent().data("radius") * 2;

	  	elem.peity("pie", {
  		  	colours: ["#4D89F9","#C6D9FD" ],
	    	radius: radius
	  	});
	}
}

$( document ).ready( HOURS.onReady );
$( document ).ready( MINUTES.onReady );
$( document ).ready( INNER_CIRCLE.onReady );

    function rotateAnnotationCropper(offsetSelector, xCoordinate, yCoordinate, cropper){
        //alert(offsetSelector.left);
    
        var x = xCoordinate - offsetSelector.offset().left - offsetSelector.width()/2;
        var y = -1*(yCoordinate - offsetSelector.offset().top - offsetSelector.height()/2);
        var theta = Math.atan2(y,x)*(180/Math.PI);        


        var cssDegs = convertThetaToCssDegs(theta);
        var rotate = 'rotate(' +cssDegs + 'deg)';
        cropper.css({'-moz-transform': rotate, 'transform' : rotate, '-webkit-transform': rotate, '-ms-transform': rotate});
        $('body').on('mouseup', function(event){ $('body').unbind('mousemove')});

    }
        
    function convertThetaToCssDegs(theta){
        var cssDegs = 90 - theta;
        return cssDegs;
    }
    
    $(document).ready(function(){               
        
        $('#marker').on('mousedown', function(){
            $('body').on('mousemove', function(event){
                rotateAnnotationCropper($('.inner_circle').parent(), event.pageX,event.pageY, $('#marker'));    
            });
                                
        });                    
    }); 