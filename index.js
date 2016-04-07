'use strict';

var fs = require('fs');
var exec = require('child_process').execSync;

var CONTENT_FILE = './commit_content/content.txt';

// Build up a small commit message with your git username and the current time.
var name;
var currentTime = new Date();
try {
    name = exec('git config user.name', {encoding: 'utf8'}).split('\n')[0];
}catch(e){
    console.log(e);
    name = 'Unknown git user';
}
var message = `${name} added this at ${currentTime}`;

// Stick that message in content.txt as something to commit.
fs.appendFileSync(CONTENT_FILE, `\n${message}`);

// Stage and commit the new chagnes.
exec(`git add ${CONTENT_FILE} && git commit -m "${message}"`);