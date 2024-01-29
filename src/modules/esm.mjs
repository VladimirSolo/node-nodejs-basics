import path from 'path';
import fs from 'fs';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js'

const random = Math.random();

let unknownObject;

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

if (random > 0.5) {
    unknownObject= loadJSON('./files/a.json');
} else {
    unknownObject= loadJSON('./files/b.json')
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(new URL(import.meta.url).pathname)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
