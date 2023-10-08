const fetch = require('node-fetch')

exports.handler = async function(event, context) {
	const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJU1RsmiEkeUcR5yG23k0klJI&key=${process.env.GOOGLE_API_KEY}&reviews_sort=newest&language=it`;

	return fetch(url)
		.then(response => response.json())
		.then(data => ({
			statusCode: 200,
			body: JSON.stringify(data),
		}))
		.catch(error => ({ statusCode: 422, body: String(error) }));
}
