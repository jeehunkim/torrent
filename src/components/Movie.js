import React, { Component } from 'react';
import Rating from './Rating';

export default class Movie extends Component {

	render() {
		const { title, genres, small_cover_image, rating } = this.props.data
		return (
			<div className="movie">
			<h3>{title}</h3>
			<p>{genres}</p>
			<img src={small_cover_image} alt="cover" />
			<Rating amount={rating} max={10} />
		</div>
		);
	}
}

/*
import React from 'react';
import Rating from './Rating';

export default ({ data }) => {
	const { title, genres, small_cover_image, rating } = data;
	return (
		<div className="movie">
			<h3>{title}</h3>
			<p>{genres}</p>
			<img src={small_cover_image} alt="cover" />
			<Rating amount={rating} max={10} />
		</div>
	);
};
*/