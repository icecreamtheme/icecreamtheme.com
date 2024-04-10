const platforms = [
	'gnome terminal',
	'neovim',
	'tmux',
	'xresources',
]

var search = document.getElementById('search')

search.addEventListener('keypress', () => {
	for (var i = 0; i < platforms.length; i++) {
		var query = search.value;
		if (platforms[i].includes(query)){
			console.log(platforms[i])
		}
	}
})
