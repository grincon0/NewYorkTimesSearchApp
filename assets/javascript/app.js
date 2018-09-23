var apiKey = '39ed6293008242c39c5931e159dde131';
var keyParam = '&api_key=';
var qParam = '?q=';
var beginParam = '?begin_date=';
var endParam = '?end_date=';
var pageParam = '?page=';
var baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' ;
var testQ = "trump";
//var userSearch = $("#emailhelp").val().trim();
//var userRecords = $("exampleSelect1").val().trim();
$("#sender").on("click", function (){
    var userSearch = $("#exampleInputEmail1").val().trim();
    //var userRecords = $("exampleSelect1").val().trim();
    var queryURL = baseUrl + qParam + testQ + keyParam + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(response.response.docs[1].headline.main);
        var source = response.response.docs;
        for(var i = 0; i < source.length; i++){
            var newDiv = $('<div>');
            newDiv.html(`<a href="${source[i].web_url}"><h5>${source[i].headline.main}</h5></a>
                        <h6>${source[i].byline.original}</h6>
                        <p>${source[i].pub_date}</p>`);

            if(!source[i].byline.original)  {
                console.log("no author detected");
            }          
            $("#result").append(newDiv);
        }
    }).catch(function(err){
        throw err;
    });
});



