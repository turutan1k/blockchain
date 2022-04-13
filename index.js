let crypto = require('crypto');
let text = 'Hello World';
let hash = crypto.createHash('sha256').update(text).digest('hex');

console.log(hash)