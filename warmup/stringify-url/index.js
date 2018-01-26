let stringify = (url, queryObj) => {
    url += '?';
    for(let key in query) {
        url+= `${key}=${query[key]}&`;
    }
    return url
}

let endpoint = 'http://localhost:8080/monkeys';
let query = {
    color: 'black',
    species: 'howler'
}

console.log(stringify(endpoint, query)); // 'http://localhost:8080/monkeys?color=black&species=howler;