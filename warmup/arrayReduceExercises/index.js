function total(arr){
    let totalSum = arr.reduce((total, currentNum) => {
        return total + currentNum;
    })
    return totalSum;
}

function stringConcat(arr) {
    return arr.reduce((total, curr) => {
        curr = String(curr);
        return total + curr;
    }, "")
}

function totalVotes(arr) {
    return arr.reduce((total, curr) => {
        return curr.voted ? total + 1 : total;
    }, 0)
}

function shoppingSpree(arr) {
    return arr.reduce((total, curr) => {
        return total + curr.price;
    }, 0);
}

function flatten(arr) {
    return arr.reduce((total, curr) => {
        return [...total, ...curr];
    });
}

function voterResults(arr) {
    return arr.reduce((total, curr) => {
        if (curr.age < 26) {
            total.youth++;
            curr.voted ? total.youngVotes++ : null;
            return total;
        } else if (curr.age < 36) {
            total.mids++;
            if (curr.voted) {
                total.midVotes++;
            }
            return total;
        } else if (curr.age < 56) {
            total.olds++;
            if (curr.voted) {
                total.oldVotes++;
            }
            return total;
        }
    }, {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0
    });
}

module.exports = {
    total,
    stringConcat,
    totalVotes,
    shoppingSpree,
    flatten,
    voterResults
}

