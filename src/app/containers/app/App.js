import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import SearchInput from "components/searchinput/SearchInput";
import SearchResults from "components/searchresults/SearchResults";
import { search } from "ducks/searchResults";

class App extends Component {

	static propTypes = {
		results: PropTypes.array,
		isLoading: PropTypes.bool.isRequired
	}

	constructor(...args) {
		super(...args);

		this.onSearchInputSearch = this.onSearchInputSearch.bind(this);
	}

	render() {
		const {
			results,
			isLoading
		} = this.props;

		return (
			<div>
				<SearchInput onSearch={this.onSearchInputSearch} />
				{isLoading ?
					<h1>Loading...</h1>
					:
					<SearchResults results={results} />
				}
			</div>
		);
	}

	onSearchInputSearch(query) {
		this.props.dispatch(search(query));
	}

}

const mapStateToProps = ({ searchResults: { results, isLoading } }) => ({
	results,
	isLoading
});

export default connect(mapStateToProps)(App);
