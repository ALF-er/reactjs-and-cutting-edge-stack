import { search as searchAPI } from "utils/GITHUBAPIUtils";

const SEARCH = "RCES/searchResults/SEARCH";

const initialState = {
	isLoading: false,
	results: null
};

export default function reducer(state = initialState, action = {}) {
	const { type, payload } = action;

	switch(type) {
		case SEARCH:
			return Object.assign(
				{},
				state,
				payload ? {
					results: payload,
					isLoading: false
				}
				:
				{
					results: [],
					isLoading: true
				}
			);

		default:
			return state;
	}
}

export function search(query) {
	return async function(dispatch, getState) {
		dispatch({
			type: SEARCH
		});

		const results = await searchAPI(query);

		return dispatch({
			type: SEARCH,
			payload: results
		});
	};
}
