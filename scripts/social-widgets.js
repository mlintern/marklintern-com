/* Twitter Widget Code Starts here */
$(document).ready(function() {twitter_widget = new TWTR.Widget({
id: 'home-twitter-feed',
version: 2,
type: 'profile',
rpp: 30,
interval: 30000,
width: 230,
height: 310,
theme: {
shell: {
background: '#ffffff',
color: '#000000'
},
tweets: {
background: '#ffffff',
color: '#333333',
links: '#004097'
}
},
features: {
scrollbar: false,
loop: false,
live: false,
behavior: 'all'
}
/* Update user here */
}).render().setUser('mlintern').start();

watch_twitter = setInterval(function(){checkTwitter()}, 500);
function checkTwitter() {
if($("#home-twitter-feed .twtr-tweet").length) {
clearInterval(watch_twitter);

$("#home-twitter-feed.twtr-widget").css("position", "static");

$("#home-twitter-feed .twtr-reference-tweet").remove();
$("#home-twitter-feed .twtr-tweets").easyPaginate({
step:3, 
auto:false, 
loop:false,
clickstop:false,
nextprev: false,
controls: 'twitter-controls'
});
}
}
});
/* Twitter Widget Code Ends here */

/* Instagram Widget Code Starts here */
(function($){
$.fn.instagram = function(options) {
var that = this,
apiEndpoint = "https://api.instagram.com/v1",
settings = {
hash: null
, userId: null
, locationId: null
, search: null
, accessToken: null
, clientId: null
, show: null
, onLoad: null
, onComplete: null
, maxId: null
, minId: null
, next_url: null
};

options && $.extend(settings, options);

function createPhotoElement(photo) {
var li = $('<li>')
.addClass('instagram-placeholder')
.attr('id', photo.id)
.append(
$('<a>')
.attr('target', '_blank')
.attr('href', photo.link)
.addClass('social-image')
.addClass('instagram-image')
.css('background-image', 'url(' + photo.images.low_resolution.url + ')')
);
if (photo.caption) {
li.append($('<p>').text(photo.caption.text));
}
return li;
}

function createEmptyElement() {
return $('<div>')
.addClass('instagram-placeholder')
.attr('id', 'empty')
.append($('<p>').html('No photos for this query'));
}

function composeRequestURL() {

var url = apiEndpoint,
params = {};

if (settings.next_url != null) {
return settings.next_url;
}

if(settings.hash != null) {
url += "/tags/" + settings.hash + "/media/recent";
}
else if(settings.search != null) {
url += "/media/search";
params.lat = settings.search.lat;
params.lng = settings.search.lng;
settings.search.max_timestamp != null && (params.max_timestamp = settings.search.max_timestamp);
settings.search.min_timestamp != null && (params.min_timestamp = settings.search.min_timestamp);
settings.search.distance != null && (params.distance = settings.search.distance);
}
else if(settings.userId != null) {
url += "/users/" + settings.userId + "/media/recent";
}
else if(settings.locationId != null) {
url += "/locations/" + settings.locationId + "/media/recent";
}
else {
url += "/media/popular";
}

settings.accessToken != null && (params.access_token = settings.accessToken);
settings.clientId != null && (params.client_id = settings.clientId);
settings.minId != null && (params.min_id = settings.minId);
settings.maxId != null && (params.max_id = settings.maxId);
settings.show != null && (params.count = settings.show);

url += "?" + $.param(params)

return url;
}

settings.onLoad != null && typeof settings.onLoad == 'function' && settings.onLoad();

$.ajax({
type: "GET",
dataType: "jsonp",
cache: false,
url: composeRequestURL(),
success: function(res) {
var length = typeof res.data != 'undefined' ? res.data.length : 0;
var limit = settings.show != null && settings.show < length ? settings.show : length;

if(limit > 0) {
for(var i = 0; i < limit; i++) {
that.append(createPhotoElement(res.data[i]));
}
}
else {
that.append(createEmptyElement());
}

settings.onComplete != null && typeof settings.onComplete == 'function' && settings.onComplete(res.data, res);
}
});

return this;
};
})(jQuery);

$(function() {
$("#home-instagram-photos").instagram({
show: 10,
/* Update user here */
userId: '205224010',
accessToken: '8325917.7a90852.ada4cf0dab3641de8592d5beb5114d25',
clientId: '7a90852f00f342afb1331927fae0cd94',
onComplete: function(){
$('#home-instagram-photos').easyPaginate({
step:1, 
auto:false, 
loop:false,
clickstop:false,
nextprev: false
});
}
});
});
/* Instagram Widget Code Ends here */