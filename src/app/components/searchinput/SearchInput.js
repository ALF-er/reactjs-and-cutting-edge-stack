import React, { Component, PropTypes } from "react";
import emptyFunction from "fbjs/lib/emptyFunction";

export default class SearchInput extends Component {

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
					type="text"
					ref={c => this.input = c}
				/>

				<button type="submit">Search</button>
			</form>
		);
	}

	onFormSubmit = (evt) => {
		evt.preventDefault();
		this.props.onSearch(this.input.value)
	}

}
