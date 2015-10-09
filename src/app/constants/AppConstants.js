import keyMirror from "react/lib/keyMirror";

export default {

	ActionTypes: keyMirror({
	}),

	PayloadSources: keyMirror({
		SERVER_ACTION: null,
		APP_ACTION:    null,
		VIEW_ACTION:   null
	})

};
