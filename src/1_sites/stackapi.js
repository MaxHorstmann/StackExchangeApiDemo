// Define apiBaseUrl and method here:
var apiBaseUrl = "http://api.stackexchange.com/2.2";
var method = "/sites";

$.get(apiBaseUrl + method)
    .done(function(response) {
        $.each(response.items, function(index, item) {
            $("#results").append("<li><img src='" + item.favicon_url +"'/> "
                        + "<a href='"+ item.site_url +"'>" + item.name + "</a></li>");
        });
    })
    .error(function() {
        $("#results").append("Error: could not access API. Make sure to set apiBaseUrl and method.");
    });


