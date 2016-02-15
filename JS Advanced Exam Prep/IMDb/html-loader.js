var imdb = imdb || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
			moviesContainer = document.getElementById('movies'),
			detailsContainer = document.getElementById('details'),
			genresUl = loadGenres(data);

		container.appendChild(genresUl);

		genresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var genreId,
					genre,
					moviesHtml;

				genreId = parseInt(ev.target.getAttribute('data-id'));
				genre = data.filter(function (genre) {
					return genre._id === genreId;
				})[0];

				moviesHtml = loadMovies(genre.getMovies());
				moviesContainer.innerHTML = moviesHtml.outerHTML;
				moviesContainer.setAttribute('data-genre-id', genreId);
			}
		});

		moviesContainer.addEventListener('click', function(ev) {
			var genreId, genre, movieId, movie, actorsHTML;

			genreId = parseInt(this.getAttribute('data-genre-id'));
			genre = data.filter(function (genre) {
				return genre._id === genreId;
			})[0];

			if (ev.target.tagName === 'LI') {
				movieId = parseInt(ev.target.getAttribute('data-id'));
				movie = genre.getMovies().filter(function (movie) {
					return movie._id === movieId;
				})[0];

				actorsHTML = loadMovieInfo(movie);
				detailsContainer.innerHTML = actorsHTML.outerHTML;
				detailsContainer.setAttribute('data-movie-id', movieId);
			}else if (ev.target.tagName === 'BUTTON') {
				movieId = parseInt(ev.target.parentNode.getAttribute('data-id'));
				genre.deleteMovieById(movieId);
				var ul = moviesContainer.querySelector('ul');
				ul.removeChild(ev.target.parentNode);
			}else {
				movieId = parseInt(ev.target.parentNode.getAttribute('data-id'));
				movie = genre.getMovies().filter(function (movie) {
					return movie._id === movieId;
				})[0];

				actorsHTML = loadMovieInfo(movie);
				detailsContainer.innerHTML = actorsHTML.outerHTML;
				detailsContainer.setAttribute('data-movie-id', movieId);
			}
		});

		detailsContainer.addEventListener('click', function(ev) {
			var movieId, movie, reviewId, genreId, genre;

			genreId = parseInt(this.previousElementSibling.getAttribute('data-genre-id'));
			genre = data.filter(function (genre) {
				return genre._id === genreId;
			})[0];
			if (ev.target.tagname = 'BUTTON') {
				movieId = parseInt(this.getAttribute('data-movie-id'));
				movie = genre.getMovies().filter(function (movie) {
					return movie._id === movieId;
				})[0];
				reviewId = parseInt(ev.target.parentNode.getAttribute('data-id'));

				movie.deleteReviewById(reviewId);
				var rev = document.getElementById('reviewsDiv');
				rev.removeChild(ev.target.parentNode);
			}
		})
	}

	function loadGenres(genres) {
		var genresUl = document.createElement('ul');
		genresUl.setAttribute('class', 'nav navbar-nav');
		genres.forEach(function (genre) {
			var liGenre = document.createElement('li');
			liGenre.innerHTML = genre.name;
			liGenre.setAttribute('data-id', genre._id);
			genresUl.appendChild(liGenre);
		});

		return genresUl;
	}

	function loadMovies(movies) {
		var moviesUl = document.createElement('ul');
		movies.forEach(function (movie) {
			var liMovie = document.createElement('li');
			liMovie.setAttribute('data-id', movie._id);

			liMovie.innerHTML = '<h3>' + movie.name + '</h3>';
			liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
			liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
			liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
			liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
			liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
			var btn = document.createElement('button');
			btn.innerHTML = 'Delete movie';
			liMovie.appendChild(btn);
			
			moviesUl.appendChild(liMovie);
		});

		return moviesUl;
	}

	function loadMovieInfo(movie) {
		var infoDiv = document.createElement('div'),
			actorsDiv = document.createElement('div'),
			reviewsDiv = document.createElement('div'),
			actors = movie.getActors(),
			reviews = movie.getReviews();

		actorsDiv.innerHTML = '<h2>' + 'Actors' + '</h2>';
		actors.forEach(function(actor) {
			var liActor = document.createElement('li');
			liActor.style.paddingLeft = '30px';
			liActor.setAttribute('data-id', actor._id);

			liActor.innerHTML = '<h4>' + actor.name + '</h4>';
			liActor.innerHTML += '<div><strong>Bio</strong>: ' + actor.bio + '</div>';
			liActor.innerHTML += '<div><strong>Born</strong>: ' + actor.born + '</div>';

			actorsDiv.appendChild(liActor);
		});

		reviewsDiv.setAttribute('id', 'reviewsDiv');
		reviewsDiv.innerHTML = '<h2>' + 'Reviews' + '</h2>';
		reviews.forEach(function(review) {
			var liReview = document.createElement('li');
			liReview.style.paddingLeft = '30px';
			liReview.setAttribute('data-id', review._id);

			liReview.innerHTML = '<h4>' + review.author + '</h4>';
			liReview.innerHTML += '<div><strong>Content</strong>: ' + review.content + '</div>';
			liReview.innerHTML += '<div><strong>Date</strong>: ' + review.date + '</div>';
			var btn = document.createElement('button');
			btn.innerHTML = 'Delete review';
			liReview.appendChild(btn);

			reviewsDiv.appendChild(liReview);
		});

		infoDiv.appendChild(actorsDiv).appendChild(reviewsDiv);
		return infoDiv;
	}

	scope.loadHtml = loadHtml;
}(imdb));