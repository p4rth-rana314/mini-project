export function save(name) {
    localStorage.removeItem('eventName');
    localStorage.setItem('eventName', name);
}