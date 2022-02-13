import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as databaseRef, push, set, get, remove } from 'firebase/database';
import { db, storage } from './libs/firebase/firebaseConfig.js';

document.querySelector("#gameCover").addEventListener("change", onImageSelected);
document.forms["productForm"].addEventListener("submit", onAddProduct);

function onAddProduct(e) {
    e.preventDefault();
    uploadNewGame();
}

function onImageSelected(e) {
    let file = e.target.files[0];

    document.querySelector(".display img").src = URL.createObjectURL(file);
}

async function uploadNewGame() {
    const cover = document.querySelector('#gameCover').files[0];
    const title = document.querySelector('#gameTitle').value.trim();
    const price = document.querySelector('#gamePrice').value.trim();
    const genre = document.querySelector('#gameGenre').value.trim();
    const rating = document.querySelector('#ageRating').value.trim();
    const release = document.querySelector('#releaseDate').value.trim();

    const imageRef = storageRef( storage, `images/${cover.name}`);
    const dataRef = databaseRef( db, 'games');

    const uploadResult = await uploadBytes(imageRef, file);

    const urlPath = await getDownloadURL(imageRef);

    const storagePath = uploadResult.metadata.fullPath;

    const itemRef = await push(dataRef);

    set(itemRef,{
        key: itemRef.key,
        sku:`dmit${itemRef.key}`,
        urlPath,
        storagePath,
        title,
        price,
        genre,
        rating,
        release
    })

}