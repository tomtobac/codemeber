const fs = require('fs');
const users = fs.readFileSync('./users.txt', 'utf8');

const keys = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const validUsers = users
	.split('\n\n')
	.map((input) => {
		const entries = input
			.replaceAll('\n', ' ')
			.split(' ')
			.filter(Boolean)
			.map((entry) => entry.split(':'));
		return Object.fromEntries(entries);
	})
	.filter((input) => {
		return keys.every((key) => Object.hasOwn(input, key));
	});

console.log({ last_user: validUsers.at(-1), count: validUsers.length });
