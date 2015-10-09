import React, { Component, PropTypes, findDOMNode } from "react";
import emptyFunction from "react/lib/emptyFunction";

export default class Search extends Component {

	static propTypes = {
		onSearch: PropTypes.func
	}

	static defaultProps = {
		onSearch: emptyFunction
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input
					ref={c => this.term = c}
					type="text"
				/>

				<button type="submit">Search</button>
			</form>
		);
	}

	onFormSubmit = (evt) => {
		evt.preventDefault();
		this.props.onSearch(findDOMNode(this.term).value);
	}

}
