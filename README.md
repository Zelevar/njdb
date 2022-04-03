# Node Json DataBase
A simple json database writted on node.
## How to use?
```
var database = require('./script')

database.file("./database.json");
console.log(database.get('user', 'password'));
database.add('user', 'password', '12345678');
```
## About
This is an analog of the [script](https://github.com/bauripalash/foobardb) that I wrote on **node.js** __without any skill__.
