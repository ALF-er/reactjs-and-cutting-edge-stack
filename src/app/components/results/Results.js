import React, { Component, PropTypes } from "react";
import Result from "components/result/Result";

export default class Results extends Component {

	static propTypes = {
		results: PropTypes.array.isRequired
	}

	render() {
		const {
			results
		} = this.props;

		return (
			<section>
				<h3>Results</h3>

				<ul>
					{results.map(({ name, owner: { login }, url}) =>
						<li key={name}>

							<Result
								name={name}
								authorName={login}
								url={url}
							/>

						</li>
					)}
				</ul>
			</section>
		);
	}

}
