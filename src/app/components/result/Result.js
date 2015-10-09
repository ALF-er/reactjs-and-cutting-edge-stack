import React, { Component, PropTypes } from "react";
import shallowEqual from "react/lib/shallowEqual";

export default class Result extends Component {

	static propTypes = {
		name:       PropTypes.string.isRequired,
		authorName: PropTypes.string.isRequired,
		url:        PropTypes.string.isRequired
	}

	shouldComponentUpdate = (nextProps) => !shallowEqual(nextProps, this.props)

	render() {
		const {
			name,
			authorName,
			url
		} = this.props;

		return (
			<article>
				<h4>{name}</h4>
				<p>{authorName}</p>

				<a
					href={url}
					target="_blank"
				>
					Go to Repo
				</a>
			</article>
		);
	}

}
