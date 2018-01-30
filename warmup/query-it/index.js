
// var filter = ({}, database);


// var filterDatabase = database.filter(function(item) {
//     for (var key in database) {
//         if(item[key] === undefined || item[key] != database[key])
//             return false;
//     }
//     return true;
// });

// console.log(filterDatabase);

let database = [
    { a: 1, b: 1, c: 2 },
    { a: 0, b: 0, c: 2 },
    { a: 3, b: 1, c: 0 },
    { a: 1, b: 2, c: 2 }
];


let queryObj = {
    b:1
}

let filterDatabase = (query, database) => {
    return database.filter(resource => {
        //we know this has to return true/false
        for (let key in query) {
            //check if query matches resource
            if (query[key] !== resource[key]) {
                return false;
            }
        }
        return true;
    });
}

console.log(filterDatabase(queryObj, database));