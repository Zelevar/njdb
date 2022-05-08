# Node Json DataBase
A simple json database writted on **node.js**.
## How to use?
```
var database = require('./script')

database.file("./database.json");
database.add('user', 'password', '12345678');
console.log(database.get('user', 'password'));
> 12345678
```
## About
This is an analog of the [script](https://github.com/bauripalash/foobardb) that I wrote on **node.js** _without any skill_.
