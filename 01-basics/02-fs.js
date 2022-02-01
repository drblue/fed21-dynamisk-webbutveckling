/**
 * File System
 * <https://nodejs.org/dist/latest-v16.x/docs/api/fs.html>
 *
 * commonly used methods are:
 *
 * readdir() - read contents of a directory
 * readFile() - read a file
 * writeFile() - write to a file
 * unlink() - delete a file
 * mkdir() - make a directory
 * rmdir() - delete a directory
 */

/**
 * readdir using callbacks
 */
/*
const fs = require('fs');

console.log("Before readdir...");

// list contents in current directory
fs.readdir('.', (err, files) => {
	console.log("The contents in the current directory is:");
	console.log(files);
});

console.log("After readdir...");
*/

/**
 * Readdir using promises 😘
 */
const fs = require('fs').promises;

fs.readdir('qwerty')
	.then(files => {
		console.log("The contents in the current directory is:");
		console.log(files);
	})
	.catch(e => {
		console.error(e);
	});
