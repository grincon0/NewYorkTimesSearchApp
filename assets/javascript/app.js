

var keyParam = '&api_key=';
var qParam = '?q=';
var beginParam = '?begin_date=';
var endParam = '?end_date=';
var pageParam = '?page=';
var baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' ;

var testQ = "trump"
var queryURL = baseUrl + qParam + testQ + keyParam + apiKey;


//var userSearch = $("#emailhelp").val().trim();
//var userRecords = $("exampleSelect1").val().trim();
$(document).ready(function(){
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    }).catch(function(err){
        throw err;
    });

});



