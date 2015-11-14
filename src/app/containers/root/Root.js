import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "store/configureStore";
import App from "containers/app/App";

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}
