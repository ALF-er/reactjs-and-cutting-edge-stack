import React, { Component } from "react";
import Results from "components/results/Results";
import Search from "components/search/Search";
import SearchResultsStore from "stores/SearchResultsStore";
import { search } from "actions/SearchActionsCreators";

export default class RCES extends Component {

	constructor(props) {
		super(props);

		this.state = {
			results: SearchResultsStore.getResults()
		};
	}

	componentDidMount() {
		SearchResultsStore.addChangeListener(this.onStoresChange);
	}

	componentWillUnmount() {
		SearchResultsStore.removeChangeListener(this.onStoresChange);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.results != this.state.results;
	}

	onStoresChange = () => this.setState({ results: SearchResultsStore.getResults() })

	onSearch(term) {
		search(term);
	}

	render() {
		const {
			results
		} = this.state;

		return (
			<div>
				<h1>Github search</h1>

				<Search onSearch={this.onSearch} />

				<Results results={results} />
			</div>
		);
	}

}
