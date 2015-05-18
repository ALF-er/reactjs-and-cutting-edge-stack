import RCEHDispatcher from "dispatcher/RCEHDispatcher";
import { ActionTypes, PayloadSources } from "constants/AppConstants";
import assign from "react/lib/Object.assign";
import { EventEmitter } from "events";
import { List } from "immutable";

const CHANGE_EVENT = "CHANGE_EVENT";

let results = List();

let SearchResultsStore	= assign({}, EventEmitter.prototype, {
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
        return results;
    },

    dispatchToken: RCEHDispatcher.register((payload) => {
		let action	= payload.action;
		let err		= action.error;
		let res		= action.result;
        let source  = payload.source;

		switch(action.type) {
			case ActionTypes.SEARCH:
				if (err || source == PayloadSources.VIEW_ACTION) {
					results = List();
				} else if (res) {
					results = res;
				}

				SearchResultsStore.emitChange();
			break;
        }
    })
});

export default SearchResultsStore;
