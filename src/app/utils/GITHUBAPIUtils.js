import { fetch, Headers } from "whatwg-fetch";
import Immutable from "immutable";

export default {

    async search(term) {
        let headers = new Headers();
    	headers.append("Accept", "application/json");
        headers.append("Content-Type",  "application/json");

    	let query = JSON.stringify({ q: term });

    	let response = await fetch(
			"https://api.github.com/search/repositories?q=" + encodeURIComponent(term),
			{
				method: "get",
				headers
			}
		);

    	if (response.status < 200 || response.status >= 300) {
    		throw new Error(response.statusText);
    	}

    	response = Immutable.fromJS(await response.json());

    	return response.get("items");
    }

}
