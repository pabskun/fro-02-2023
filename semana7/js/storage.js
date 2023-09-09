const getStorageItem = (key) => {
    let value;
    value = JSON.parse(localStorage.getItem(key));

    return value;
};

const setStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};