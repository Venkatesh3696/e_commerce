export const registerFormControls = [
	{
		name: 'userName',
		label: 'User Name',
		placeholder: 'Enter your username',
		type: 'text',
		conmonentType: 'input',
	},
	{
		name: 'email',
		label: 'Email ',
		placeholder: 'Enter your email',
		type: 'email',
		conmonentType: 'input',
	},
	{
		name: 'password',
		label: 'Password',
		placeholder: 'Enter your password',
		type: 'password',
		conmonentType: 'input',
		autocomplete: 'current-password',
	},
];
export const loginFormControls = [
	{
		name: 'email',
		label: 'Email ',
		placeholder: 'Enter your email',
		type: 'email',
		conmonentType: 'input',
	},
	{
		name: 'password',
		label: 'Password',
		placeholder: 'Enter your password',
		type: 'password',
		conmonentType: 'input',
		autocomplete: 'current-password',
	},
];

let API_URL;
if (process.env.NODE_ENV === 'development') {
	// Development environment
	API_URL = 'http://localhost:5000';
} else if (process.env.NODE_ENV === 'production') {
	// Production environment
	API_URL = 'http://www.BoarDrop.com.cn/boardrop';
} else {
	// Default or testing environment
	API_URL = 'https://www.tgt8.xyz/boardrop';
}

export { API_URL };
