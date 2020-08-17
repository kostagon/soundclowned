function set(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val))
    return val;
}

function get(key) {
    return JSON.parse(sessionStorage.getItem(key));
}

export default {
    set,
    get
}