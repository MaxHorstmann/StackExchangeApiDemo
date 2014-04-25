// Define apiBaseUrl and method here:
var apiBaseUrl = "http://api.stackexchange.com/2.2";
var method = "/sites";

$.ajax(apiBaseUrl + method)
    .done(function(response) {
        for (var i =0; i<response.items.length; i++) {
            var icon_url = response.items[i].favicon_url;
            var name = response.items[i].name;
            var site_url = response.items[i].site_url;

            $("#results").append("<li><img src='"+ icon_url +"'/> "
                + "<a href='"+ site_url +"'>" + name + "</a></li>");
        };
    })

