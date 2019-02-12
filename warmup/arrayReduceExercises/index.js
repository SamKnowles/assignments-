// function total(arr){
//     let totalSum = arr.reduce((total, currentNum) => {
//         return total + currentNum;
//     })
//     return totalSum;
// }

// function stringConcat(arr) {
//     return arr.reduce((total, curr) => {
//         curr = String(curr);
//         return total + curr;
//     }, "")
// }

// function totalVotes(arr) {
//     return arr.reduce((total, curr) => {
//         return curr.voted ? total + 1 : total;
//     }, 0)
// }

// function shoppingSpree(arr) {
//     return arr.reduce((total, curr) => {
//         return total + curr.price;
//     }, 0);
// }

// function flatten(arr) {
//     return arr.reduce((total, curr) => {
//         return [...total, ...curr];
//     });
// }

// function voterResults(arr) {
//     return arr.reduce((total, curr) => {
//         if (curr.age < 26) {
//             total.youth++;
//             curr.voted ? total.youngVotes++ : null;
//             return total;
//         } else if (curr.age < 36) {
//             total.mids++;
//             if (curr.voted) {
//                 total.midVotes++;
//             }
//             return total;
//         } else if (curr.age < 56) {
//             total.olds++;
//             if (curr.voted) {
//                 total.oldVotes++;
//             }
//             return total;
//         }
//     }, {
//         youngVotes: 0,
//         youth: 0,
//         midVotes: 0,
//         mids: 0,
//         oldVotes: 0,
//         olds: 0
//     });
// }

// module.exports = {
//     total,
//     stringConcat,
//     totalVotes,
//     shoppingSpree,
//     flatten,
//     voterResults
// }

voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

var votedd = voters.reduce(function(total, voter){
    if(voter.age >= 18 && voter.age <= 25 && voter.voted === true){
        total.youthVotes++
    }else if(voter.age >= 18 && voter.age <= 25){
        total.youth++
    }else if(voter.age >= 26 && voter.age <= 35 && voter.voted === true){
        total.midVotes++
    }else if(voter.age >= 26 && voter.age <= 35){
        total.mids++
    }else if(voter.age >= 36 && voter.age <= 55 && voter.voted === true){
        total.oldVotes++
    }else if(voter.age >= 36 && voter.age <= 55){
        total.olds++
    }
    return total;
        }, {
            youthVotes: 0,
            youth: 0,
            midVotes: 0,
            mids: 0,
            oldVotes: 0,
            olds: 0
        });


console.log(votedd);