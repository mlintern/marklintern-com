/* Pinterest Widget Code Starts here */
google.load("feeds", "1", { callback: function() {
    var feed = new google.feeds.Feed("http://pinterest.com/mlintern/feed.rss");
    feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);
    feed.setNumEntries(10);
    feed.load(function(result) {
        if (!result.error) {
			for (var i = 0, l=result.feed.entries.length; i < l; i++) {
			var entry = result.feed.entries[i];
			var entrydate = new Date(entry.publishedDate);
			entrydate = moment(entrydate).format('MMMM Do, YYYY');
			var li = $('<li>')
					.attr('class','pin-post')
					.append(
                $('<div>')
                    .attr('class','pin-content')
                    .html(entry.content)
			    );
			$('#home-pinerest-feed').append(li);
			}
		}
        $("#home-pinerest-feed").easyPaginate({
            step:1, 
            auto:false, 
            loop:false,
    		clickstop:false,
    		nextprev: false,
            controls: 'pinterest-controls'
    	});
	});
}});
/* Pinterest Widget Code Ends here */

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
	//.addClass('social-image')
	//.addClass('instagram-image')
	//.css('background-image', 'url(' + photo.images.low_resolution.url + ')')
	.append(
		$('<img>')
		.attr('src', photo.images.low_resolution.url)
		.attr('width', '250')
		)
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