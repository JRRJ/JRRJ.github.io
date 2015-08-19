$(document).ready(function(){
	$('h1').on('mouseenter', function(){
		$(this).css('color','white');
	});
	$('#genButton').on('click', createPrimaryStar);
});

function createPrimaryStar(){
	$('.infobox').show();
	var starSeed = Math.random()*100;	//seed for overall star class
	var starClass = 'Z';				//string for class letter
	var subClass = Math.floor(Math.random()*10);	//subclass number, 0-9
	//Main sequence only right now
	
	var starColor = '#FFF'; //star display color
	var starSize = 100; //star display diameter
	
	if(starSeed < .00003){
		starClass = 'O';
		starColor = '#9bb0ff';
		starSize = 800;
	} else if (starSeed < 0.14){
		starClass = 'B';
		starColor = 'aabfff';
		starSize = 660-50*subClass;
	} else if (starSeed < 0.74){
		starClass = 'A';
		starColor = '#cad8ff';
		starSize = 210-7*subClass;
	} else if (starSeed < 3.74){
		starClass = 'F';
		starColor = '#fbf8ff';
		starSize = 140 - 3*subClass;
	} else if (starSeed < 11.34){
		starClass = 'G';
		starColor = '#fff4e8';
		starSize = 115 - 2*subClass;
	} else if (starSeed < 23.44){
		starClass = 'K';
		starColor = '#ffddb4';
		starSize = 96 - 1.6*subClass;
	} else {
		starClass = 'M';
		starColor = '#ffbd6f';
		starSize = 60 - 5*subClass;
	}
	$('#starType').text("Primary star: " + starClass + subClass + "V\nSolar Radii: " + Math.round(100*starSize/111)/100);
	$('.star').css({'background-color' : starColor, 'width' : starSize, 'height':starSize});
}

/*
7/4/15
generalize starSize calculations

create star object type


probabilities
B:0.14
A:0.74
F:3.74
G:11.34
K:23.44
M: else.
*/