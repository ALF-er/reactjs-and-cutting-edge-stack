import React, { Component, PropTypes } from "react";
import shallowCompare from "react-addons-shallow-compare";
import SearchResult from "components/searchresult/SearchResult";

export default class SearchResults extends Component {

	static propTypes = {
		results: PropTypes.array
	}

	static defaultProps = {
		results: []
	}

	shouldComponentUpdate = (nextProps, nextState) => shallowCompare(this, nextProps, nextState)

	render() {
		const {
			results
		} = this.props;

		if (!results) {
			return null;
		} else if (results.length > 0) {
			return (
				<ul>
					{
						results.map((result) =>
							<SearchResult key={result.id} result={result} />
						)
					}
				</ul>
			);
		} else {
			return (
				<h3>There is no repositories with such name</h3>
			);
		}
	}

}
