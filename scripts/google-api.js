google.load("feeds", "1", { callback: function() {
	var feed = new google.feeds.Feed("http://blog.marklintern.com/blog/test---marks-network/rss");
	feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);
	feed.setNumEntries(10);
	feed.load(function(result) {
		if (!result.error) {
			for (var i = 0, l=result.feed.entries.length; i < l; i++) {
			var entry = result.feed.entries[i];
			//console.log(entry);
			var entrydate = new Date(entry.publishedDate);
			entrydate = moment(entrydate).format('MMMM Do, YYYY');
			var li = $('<li>')
					.attr('class','post')
					.append(
				$('<a>')
					.attr('target','_blank')
					.attr('href', entry.link)
					.text(entry.title),
				$('<div>')
					.text(entrydate + ' by ' + entry.author)
					.attr('class','Date-Author')
/*				$('<div>')
					.attr('class','Content')
					.html(entry.content) */
			);
			$('#BlogFeedList').append(li);
			}
		}
	});
}});