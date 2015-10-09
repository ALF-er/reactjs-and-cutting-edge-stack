import RCESDispatcher from "dispatcher/RCESDispatcher";
import { ActionTypes } from "constants/AppConstants";
import { search as searchAPI } from "utils/GITHUBAPIUtils";

export default {

	async search(term) {
		RCESDispatcher.handleViewAction(ActionTypes.SEARCH, term);

		const res = await searchAPI(term);

		RCESDispatcher.handleServerAction(ActionTypes.SEARCH, res);
	}

}
