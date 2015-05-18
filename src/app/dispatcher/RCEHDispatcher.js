import { Dispatcher } from "flux";
import assign from "react/lib/Object.assign";
import { PayloadSources } from "constants/AppConstants";

export default assign(new Dispatcher(), {

	handleServerAction(type, result, error = null) {
		let payload = {
			source: PayloadSources.SERVER_ACTION,
			action: {
				type,
				error,
				result
			}
		};

		this.dispatch(payload);
		console.log(type, payload);
	},

	handleAppAction(type, result, error = null) {
		let payload = {
			source: PayloadSources.APP_ACTION,
			action: {
				type,
				error,
				result
			}
		};

		this.dispatch(payload);
		console.log(type, payload);
	},

	handleViewAction(type, result, error = null) {
		let payload = {
			source: PayloadSources.VIEW_ACTION,
			action: {
				type,
				error,
				result
			}
		};

		this.dispatch(payload);
		console.log(type, payload);
	}

});
