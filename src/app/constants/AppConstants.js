import keyMirror from "react/lib/keyMirror";

export default {
    ActionTypes: keyMirror({
        SEARCH: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        APP_ACTION:    null,
        VIEW_ACTION:   null
    })
};
