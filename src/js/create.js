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
    
}