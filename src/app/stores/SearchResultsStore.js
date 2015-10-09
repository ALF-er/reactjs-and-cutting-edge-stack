import RCESDispatcher from "dispatcher/RCESDispatcher";
import { ActionTypes, PayloadSources } from "constants/AppConstants";
import assign from "react/lib/Object.assign";
import { EventEmitter } from "events";

const CHANGE_EVENT = "CHANGE_EVENT";

let searchResults = [];

const SearchResultsStore = assign({}, EventEmitter.prototype, {

	emitChange() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param {function} callback
	 */
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getResults() {
		return searchResults;
	},

	dispatchToken: RCESDispatcher.register(({ source, action: { type, error, result } }) => {
		switch(type) {

			case ActionTypes.SEARCH:
				if (error || (source === PayloadSources.VIEW_ACTION)) {
					searchResults = [];
				} else if (result) {
					searchResults = result;
				}

				SearchResultsStore.emitChange();
			break;

		}
	})

});

export default SearchResultsStore;
