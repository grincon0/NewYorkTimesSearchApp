var apiKey = '39ed6293008242c39c5931e159dde131';

var keyParam = '&api_key=';
var qParam = '?q=';
var beginParam = '?begin_date=';
var endParam = '?end_date=';
var pageParam = '?page=';
var baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' ;

var testQ = "trump"
var queryURL = baseUrl + qParam + testQ + keyParam + apiKey;





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



