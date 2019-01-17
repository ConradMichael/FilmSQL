
var movieL = "";

var toTest = [];

var filmsFound = "";

function loadJSON(){
	
	//document.getElementById('hiding').style.display = "none";
	
	console.log("test");
	
	var request = new XMLHttpRequest();
	
	request.open('GET', 'http://127.0.0.1:8080/api/films');
	
	request.setRequestHeader('Content-Type', 'application/json');     
	request.setRequestHeader('Access-Control-Allow-Origin', '*');
	
	request.responseType = 'json';
	
	request.send();

	request.onload = function(){
		
	toTest = request.response;
		
	}
	
}
	
function searchAllFilms(fID){

		
		for(i = 0; i < toTest.length; i++){
			console.log("Hit");
			document.getElementById('Search').innerHTML += toTest[i].title + " <br>";
        }
}

function searchFilmTitle(fTitle){
	
	document.getElementById('ToInsert').innerHTML = "";
	
	filmsFound = "";
	resultsFound = 0;
	
	fSearchTitle = fTitle.toUpperCase();
	
	console.log(toTest.length);
	for(i = 0; i < toTest.length; i++){
		if(toTest[i].title.includes(fSearchTitle)){
			console.log("Hit");
			resultsFound ++;
			console.log("testing");
			var div = document.createElement('div');
			div.innerHTML = document.getElementById('DisplayFilm').innerHTML;
			document.getElementById('MovieTitle').innerHTML = toTest[i].title;
			document.getElementById('MovieDescription').innerHTML = toTest[i].description;
			
			document.getElementById('ToInsert').appendChild(div);
		}
	}
		
		//document.getElementById("Search").innerHTML = movieL;	
}

function searchFilmId(fID){
	
	if(fID > 0 && fID < 1001){
		fID -= 1;
		document.getElementById('Search').innerHTML = toTest[fID].title + " <br>";

	} else {
		document.getElementById('Search').innerHTML = "Enter a value between 1 - 1000 <br>";

	}
}
	



