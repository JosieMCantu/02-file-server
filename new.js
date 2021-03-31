const fs = require('fs')

fs.readFile('./README.MD', utf-8)
.then((data) => fs.writeFile('./README-COPY.md', data.toUpperCase()))
.then(() => console.log('copied'));

fs.readFile('./README.MD', utf-8)
.then((data) => fs.writeFile('./README-COPY.md', data.toUpperCase().replaceAll('P', 'T')))
.then((data) => fs.writeFile('./README-copy.md', data))
.then(() => console.log('copied'));


//to delete a file
// .then(() => fs.rm('./README.md'))


fs.readFile('./README.MD', utf-8)
.then((data) => fs.writeFile('./README-COPY.md', data.toUpperCase().replaceAll('P', 'T')))
.then((data) => fs.writeFile('./README-copy.md', data))
.then(() => console.log('copied'));