import crypto from 'crypto'
import fs from 'fs'

const path = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);

const calculateHash = async () => {
    try {
        const fileBuffer = await fs.promises.readFile(path);
        const hash = crypto.createHash("SHA3-256").update(fileBuffer).digest("hex");
        console.log({hash});
    } catch (error) {
        console.log('Falled Hash');
    }

};

await calculateHash();      