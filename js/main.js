var audio;


//audio = new Audio('media/Love Is Over.mp3');



//Initialize Audio
initAudio($('#playList li:first-child'));


//Initialize Function
function initAudio(element){
	var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');


//create Audio Object
audio = new Audio('media/' + song);

if(!audio.currentTime){
	$('.current-duration').html('0:00');
}

$('.album-title').text(artist);
$('.song-title').text(title);

//Insert Cover
$('img.song-cover').attr('src','img/'+cover);

showDuration();

$('#playList li').removeClass('active');
element.addClass('active');
}


//audio.play();

//Time Duration
function showDuration(){
	$(audio).bind('timeupdate',function(){
		//Get Hours in minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt((audio.currentTime) / 60) % 60;
		//Add 0 id less than 10
		if(s < 10){
			s = '0' + s;
		}
		if(m < 10){
			m = '0' + m;
		}
		$('.current-duration').html(m + ':' + s);
	});
}

//Play Button
$('.fa-play').click(function(){
	audio.play();
	$('.fa-play').hide();
	//$('.fa-pause').show();
	showDuration();
});



//Home Function
$('.fa-home').click(function(){
	audio.pause();
	var next = $('#playList li.active').next();
	if(next.length == 0){
		next = $('#playList li:first-child');
	}
	initAudio(next);
	audio.play();
	showDuration();	
});


//Randome Function
$('.fa-random').click(function(){
	audio.pause();
	nthh = GetRandomNum(1,$('#playList').length);
	var next = $('ul#playList li:nth-child(nthh)');
	initAudio(next);
	audio.play();
	showDuration();	
	//console.log(nthh);
});

//console.log(GetRandomNum(1,$('#playList li').length));

function GetRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}   
//var num = GetRandomNum(0,2);   
//console.log(num); 
//console.log($('li:eq(num)'));

//var hs = GetRandomNum(0,5);
//console.log(hs);


//Retweet Function
$('.fa-retweet').click(function(){
	while(audio.ended){
		var next = $('#playList li.active').next();
		if(next.length == 0){
			next = $('#playList li:first-child');
		}
	initAudio(next);
	audio.play();
	showDuration();	
	}
	
	
});

//Fa-clock-o Function
$('.fa-clock-o').click(function(){
	audio.loop=true;	
});