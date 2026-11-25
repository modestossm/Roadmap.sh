const cache = {};

function getPage(url) {
    return cache[url] ?? (cache[url] = getServerData(url));
}

function getServerData(url) {
    console.log(`Buscando ${url} no servidor...`);
    return `Conteúdo da página ${url}`;
}

console.log(getPage("google.com"));
console.log(getPage("google.com")); 