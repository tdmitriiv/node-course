const fs = require('fs')
// fs.writeFileSync('notes.txt', 'Created by node.js')
fs.appendFileSync('notes.txt', '\n1 more message')