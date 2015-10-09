import { fetch, Headers } from "whatwg-fetch";

export default {

	async search(term) {
		const headers = new Headers();
		headers.append("Accept", "application/json");
		headers.append("Content-Type",  "application/json");

		const query = JSON.stringify({ q: term });

		let response = await fetch(
			"https://api.github.com/search/repositories?q=" + encodeURIComponent(term),
			{
				method: "GET",
				headers
			}
		);

		if (response.status < 200 || response.status >= 300) {
			throw new Error(response.statusText);
		}

		response = await response.json();

		return response.items;
	}

}
