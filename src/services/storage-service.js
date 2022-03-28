
function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return (val)? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
    console.log(key,val)
    localStorage.setItem(key, JSON.stringify(val))
    // localStorage[key] = JSON.stringify(val);
}


export const storageLocal ={
    loadFromStorage,
    saveToStorage,

}