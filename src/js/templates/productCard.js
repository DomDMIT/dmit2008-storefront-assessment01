function productCard({key, gameTitle, urlPath}) {
    // Add code for our card layout
}

function addCardControls(game){
    game.querySelector('#edit').addEventListener('click', onEditGame)
    game.querySelector('#delete').addEventListener('click', onRemoveGame)
}

function onEditGame(e){
    const key = e.target.dataset.key 
    sessionStorage.setItem('key', key)
    window.location.assign('update.html')
}

function onRemoveGame(e){
    const key = e.target.dataset.key 
    sessionStorage.setItem('key', key)
    window.location.assign('delete.html')
}

export {productCard}