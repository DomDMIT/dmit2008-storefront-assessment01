import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from '.libs/firebase/firebaseConfig.js';
import {productCard} from './templates/productCard';

async function pageInit () {
    const productRef = dataRef(db, 'products/');
    const productSnapShot = await get(productRef);
    const data = productSnapShot.val();

    const productCards = Object.values(data).map(product=>{
        const card = productCard(product)
        document.body.append(card)
        return card
    })

}

pageInit()
