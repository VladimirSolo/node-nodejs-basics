import fs from 'fs'

const path = new URL('./files/fileToRead.txt', import.meta.url);

const read = async () => {
    try {
        const readFile = await fs.promises.readFile(path, 'utf-8');
        console.log(readFile);
       } catch (error) {
        console.log('FS operation failed');
       }
};

await read();