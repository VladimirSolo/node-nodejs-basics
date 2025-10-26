import fs from 'fs'

const oldPath = new URL('./files/wrongFilename.txt', import.meta.url);
const newPath = new URL('./files/properFilename.md', import.meta.url);

const rename = async () => {
    try {
        await fs.promises.rename(oldPath, newPath)
        console.log('File rename successfully')
       } catch (error) {
        console.log('FS operation failed')
       }
};

await rename();