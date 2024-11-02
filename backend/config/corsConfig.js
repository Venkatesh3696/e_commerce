export const corsConfig = {
	origin: ['http://localhost:5173'],
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: [
		'Content-Type',
		'Authorization',
		'Cache-Control',
		'Expires',
		'Pragma',
	],
	credentials: true,
};
