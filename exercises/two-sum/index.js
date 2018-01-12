// let hashMapTwoSum = (array, sum) => {
//     let hashMap = {},
//         results = []
    
//     for (let i = 0; i < array.length; i++){
//       if (hashMap[array[i]]){
//         results.push([hashMap[array[i]], array[i]])
//       }else{
//         hashMap[sum - array[i]] = array[i]
//       }
//     }
//     return results
//   }

//   console.log(hashMapTwoSum([1,2,3,4,5,6,7], 8));

let twoSum = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; i < arr.length; j++) {
            if (arr[i] + arr[j] === sum) 
                return [i, j];
            
        }
    }
}

  console.log(twoSum([1,2,3,4,5,6,7], 8));
