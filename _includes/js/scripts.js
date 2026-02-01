// cv bibtex toggle

function toggleBibtex(id) {

	let bibtex = document.getElementById(id);

	if (bibtex.style.display === 'none') {
		bibtex.style.display = 'inline-block';
	} else {
		bibtex.style.display = 'none';
	}
	
}

// dissertation youtube video api

const tag = document.createElement('script');
tag.id = 'iframe-video';
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let iframeIds = [];
let iframes = document.querySelectorAll("iframe.video");
iframes.forEach(function(iframe) {
	iframeIds.push(iframe.id);
});

// create multiple players based on dissertation talk keys
let players = [];
function onYouTubeIframeAPIReady() {
	iframeIds.forEach(function(frameId) {
		player = new YT.Player(frameId, {
			events: {
				'onReady': onPlayerReady
			}
		});
		players.push(player)
	})

	// apply onclick events to each timestamp for each player
	for (let i = 0; i < players.length; i++) {
		let videoIdSelector = '.video-part-link-' + iframeIds[i].split('-')[iframeIds.length - 1]
		const videoLinks = document.querySelectorAll(videoIdSelector);
		Array.from(videoLinks).forEach((linkElement) => {
			linkElement.addEventListener('click', () => {
				const startSecond = linkElement.getAttribute('data-start');
				players[i].seekTo(startSecond);
				players[i].playVideo();
			});
		});	
	}

}

function onPlayerReady(event) {
	// player.mute()
}

// News read more toggle
(function() {
	const newsItems = document.querySelectorAll('.news-item');
	const readMoreBtn = document.getElementById('read-more-news');
	const visibleCount = 8;

	if (newsItems.length > visibleCount) {
		// Hide items beyond the visible count
		for (let i = visibleCount; i < newsItems.length; i++) {
			newsItems[i].classList.add('hidden');
		}

		// Show all on click
		if (readMoreBtn) {
			readMoreBtn.addEventListener('click', function() {
				newsItems.forEach(function(item) {
					item.classList.remove('hidden');
				});
				readMoreBtn.classList.add('hidden');
			});
		}
	} else {
		// Hide button if not enough items
		if (readMoreBtn) {
			readMoreBtn.classList.add('hidden');
		}
	}
})();