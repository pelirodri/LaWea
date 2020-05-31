'use strict';
const arrify = require('arrify');
const execa = require('execa');

module.exports = async (input, options = {}) => {
	input = arrify(input);

	if (process.platform !== 'win32') {
		throw new Error('Windows only');
	}

	if (input.length === 0) {
		throw new Error('PID or image name required');
	}

	const args = [];

	if (options.system && options.username && options.password) {
		args.push('/s', options.system, '/u', options.username, '/p', options.password);
	}

	if (options.filter) {
		args.push('/fi', options.filter);
	}

	if (options.force) {
		args.push('/f');
	}

	if (options.tree) {
		args.push('/t');
	}

	for (const x of input) {
		args.push(typeof x === 'number' ? '/pid' : '/im', x);
	}

	return execa('taskkill', args);
};
