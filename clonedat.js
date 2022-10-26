addEventListener('DOMContentLoaded', (event) => {
	document.querySelectorAll('[data-clone]').forEach(el => {
		fetch('https://clonedat.com/rest/info/'+el.getAttribute('data-clonedat'))
			.then(r => r.json())
			.then(d => {
				if (d.error) {
					el.innerHTML = d.error;
					el.setAttribute('style', d.style);
					el.style.display = 'flex';
					el.style.aligItems = 'center';
					el.style.justifyContent = 'center';
					el.style.backgroundColor = '#faa';
				}
				else {
					el.setAttribute('style', d.style);
					el.innerHTML = '<iframe src="'+d.url+'" style="'+d.iframe_style+'"></iframe>';
					setInterval(e => {
						el.setAttribute('style', d.style);
						el.querySelector('iframe').setAttribute('style', d.iframe_style);
						if (d.brand && !el.querySelector('div')) {
							const div = document.createElement('div');
							div.innerHTML = 'powered by <a href="https://clonedat.com" style="font-weight: bold">Clonedat.com</a>';
							div.style.position = 'absolute';
							div.style.right = '0';
							div.style.bottom = '0';
							div.style.color = '#777';
							el.appendChild(div);
						}
					}, 500);
				}
			});
	});
});
