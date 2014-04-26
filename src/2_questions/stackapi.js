var apiBaseUrl = "http://api.stackexchange.com/2.2";
var method = "/questions";

// Define parameters here
var parameters = "?order=desc&sort=votes&site=scifi";

$.get(apiBaseUrl + method + parameters)
    .done(function(response) {
        $.each(response.items, function(index, item) {
            $("#results").append("<li><a href='"+ item.link +"'>" + item.title
                + "</a> (net votes: "+ item.score +")</li>");
        });
    })
    .error(function(e) {
        $("#results").append("Error: " + e.responseText);
    });

