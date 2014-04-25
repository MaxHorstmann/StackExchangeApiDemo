var apiBaseUrl = "http://api.stackexchange.com/2.2";
var method = "/questions";

// Define parameters here
var parameters = "?order=desc&sort=votes&site=scifi";

$.ajax(apiBaseUrl + method + parameters)
    .done(function(response) {
        for (var i =0; i<response.items.length; i++) {
            var title = response.items[i].title;
            var link = response.items[i].link;
            var score = response.items[i].score;

            $("#results").append("<li><a href='"+ link +"'>" + title + "</a> (score: "+ score +")</li>");
        }
    })
    .error( function() {
        $("#results").append("<span>Error: could not connect to API. Please make sure to define apiBaseUrl and method correctly.</span>")
    });