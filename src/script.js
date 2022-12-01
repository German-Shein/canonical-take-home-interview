

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
		postElement.classList.add ("decreased-card-padding");
		postElement.classList.add ("thicker-shadow");
		postElement.innerHTML = `<h5 class="card-header">${post.topic.length > 0 ? post._embedded ["wp:term"].flat ().filter (term => term.taxonomy === 'topic').find (term => term.id === post.topic [0]).name.toUpperCase () : 'CLOUD AND SERVER'}</h5>
		<div class="p-card__inner dotted-horizontal-line decreased_content_padding">
			<img class="p-card__image rounded-corners" src="${post.featured_media}">
			<h4><strong><a href="${post.link}" rel="noreferrer noopener" target="_blank">${post.title.rendered}</a></strong></h4>
			<p><em>By <a href="${post._embedded.author.find (author => author.id === post.author).link}" rel="noreferrer noopener" target="_blank">${post._embedded.author.find (author => author.id === post.author).name}</a> on ${publicationDate.getDate ()} ${publicationDate.toLocaleString ('default', { month: 'long' })} ${publicationDate.getFullYear ()}</em></p>
		</div>
		<div class="l-footer--sticky dotted-horizontal-line">
			<p class="p-card__inner card-footer">${post._embedded ["wp:term"].flat ().filter (term => term.taxonomy === 'category').find (term => term.id === post.categories [0]).name.slice (0, -1)}</p>
		</div>`;
		document.getElementsByClassName ("row") [0].append (postElement);
	})
}).catch (err => console.error (err));

