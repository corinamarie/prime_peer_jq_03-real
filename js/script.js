var apikey = '30ba6748dd4d1ab9eb5725892181c5c7466e5f5e'; // Put your API key here

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
var x = [];
var i;
function searchCallback(results) {
		// Start the search here!
	// search('batman');

	//when it clicks...
	//perform a search with the contents of the form.
	for (var i = 0; i < 3; i++){
		x[i] = new Game(i);
		$("#results").prepend('<div class="col-md-3"><a href="#" class="thumbnail"><img src="' + x[i].image + '"></a></div>');
	};
	
/*	<p class="extra">'+ x[i].description +'</p><p class="extra">'+ x[i].releaseDate +'</p><p class="extra">'+ x[i].platforms +'</p>*/
//something to change.
/*</a>'+ x[i].title + ' */


		//create a new div within #results that has all the properties for the search in it. Which are: title, and image. When you click on it, it reveals: description, release date, platform. 
	
	function Game (y) {
			this.title = results[y].name;
			this.image = results[y].image.icon_url;
			this.description = results[y].description;
			this.releaseDate = results[y].original_release_date;
			this.platforms = results[y].platforms[0];
		
		};
	

    console.log(results);
    console.log(x);
}



//empty results object that will contain: each result with its own object that contains: properties for each relevant attribute.
/*var results = {};*/

$(document).ready(function() {
	$("#submitbtn").on("click", function(){
			var searchTerm= $("#searchfield").val();
			search(searchTerm);
	});
});//end of doc ready

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    }
	});

}
