import { blobToBase64 } from './modules/blobManager.js';

const fileInput = document.querySelector('#fileInput');
const btnTob64 = document.querySelector('#btnTob64');
const btnToBlob = document.querySelector('#btnToBlob');



btnTob64.addEventListener('click', async (e) => {
    console.log(btnTob64.innerText);
    console.log('Convirtiendo mi blob');
    const myBlob = fileInput.files[0];
    const myB64 = await blobToBase64(myBlob);
    console.log(myB64);
});

btnToBlob.addEventListener('click', async (e) => {
    console.log(btnToBlob.innerText);
});

