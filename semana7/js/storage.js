const getStorageItem = (key) => {
    let value = [];
    if (localStorage.getItem(key)) {
        value = JSON.parse(localStorage.getItem(key));
    }


    return value;
};

const setStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};