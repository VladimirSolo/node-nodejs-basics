import fs from 'fs'

const path = new URL('./files/fileToRemove.txt', import.meta.url);

const remove = async () => {
    try {
        await fs.promises.unlink(path)
        console.log(`File fileToRemove.txt created successfully`);
    } catch (error) {
        console.log('FS operation failed')
    }
};

await remove();