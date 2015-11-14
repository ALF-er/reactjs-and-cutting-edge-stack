import React, { Component, PropTypes } from "react";

export default class SearchResult extends Component {

	static propTypes = {
		result: PropTypes.object.isRequired
	}

	render() {
		const {
			result: {
				owner: { login: authorName },
				html_url: repositoryPath,
				full_name: repositoryName
			}
		} = this.props;

		return (
			<li>
				<h4>{authorName}</h4>
				<a href={repositoryPath} target="_blank">{repositoryName}</a>
			</li>
		);
	}

}
