const express = require('express');
const router = express.Router();
const axios = require('axios');

// HTTP

router.post('/byhttp', (req, res) => {
	axios.post('http://0.0.0.0:5000/api/v1/students', {
		name: req.body.name
	})
	.then((result) => {
		res.json({
			status: result.status,
			statusText: result.statusText,
			headers: result.headers,
			data: result.data
		})
	})
	.catch((error) => {
		console.log(error);
	})
})

module.exports = router;