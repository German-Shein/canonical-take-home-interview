

const posts = fetch ('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json').then (response => response.json ()).then (result => 
{
	console.log (result);
	result.forEach (post =>
	{
		const publicationDate = new Date (post.date);
		const postElement = document.createElement ("div");
		postElement.classList.add ("col-4");
		postElement.classList.add ("col-medium-3");
		postElement.classList.add ("p-card--highlighted");
		postElement.classList.add ("rounded-corners");
		postElement.classList.add ("top-bar");
		postElement.classList.add ("l-card");
		postElement.innerHTML = `<h5 class="p-muted-heading category-padding">CLOUD AND SERVER</h5>
		<hr>
		<div class="p-card__inner">
			<img class="p-card__image" src="${post.featured_media}">
			<h4><a href="${post.link}" rel="noreferrer noopener" target="_blank">${post.title.rendered}</a></h4>
			<h6>By <a href="${post._embedded.author.find (author => author.id === post.author).link}" rel="noreferrer noopener" target="_blank">${post._embedded.author.find (author => author.id === post.author).name}</a> on ${publicationDate.getDate ()} ${publicationDate.toLocaleString ('default', { month: 'long' })} ${publicationDate.getFullYear ()}</h6>
		</div>
		<div class="l-footer--sticky">
			<hr class="u-no-margin--bottom">
			<div class="p-card__inner">${post.type.slice (0, 1).toUpperCase () + '' + post.type.slice (1, post.type.length)}</div>
		</div>`;
		document.getElementsByClassName ("row") [0].append (postElement);
	})
}).catch (err => console.error (err));

