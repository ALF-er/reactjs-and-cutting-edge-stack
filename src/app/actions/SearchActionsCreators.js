import RCEHDispatcher from "dispatcher/RCEHDispatcher";
import { ActionTypes } from "constants/AppConstants";
import { search as searchAPI } from "utils/GITHUBAPIUtils";

export default {
    async search(term) {
        RCEHDispatcher.handleViewAction(ActionTypes.SEARCH, term);

        let res = await searchAPI(term);

        RCEHDispatcher.handleServerAction(ActionTypes.SEARCH, res);
    }
}
