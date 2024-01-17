const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) { 
    const Copycats = [...cats, name];
    return Copycats;
    
}
function prependCat(name) {
    const Copycats = [name, ...cats];
    return Copycats;
}
function removeLastCat() {
    const Copycats = [...cats];
    Copycats.pop();
    return Copycats;
}
function removeFirstCat() {
    const Copycats = [...cats];
    Copycats.shift();
    return Copycats;
}
