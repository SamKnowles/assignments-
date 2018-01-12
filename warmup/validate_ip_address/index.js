function checkIsIPV4(entry) {
    var blocks = entry.split(".");
    if(blocks.length === 4) {
      return blocks.every(function(block) {
        return parseInt(block,10) >=0 && parseInt(block,10) <= 255;
      });
    }
    return false;
  }

  console.log(checkIsIPV4('000.000.000.000'))


// const validateIp = str => {
//     let arr = str.split(".");
//     if (arr.length !== 4) return false;
//     return arr.every((num) => {
//         if (!num) return false;
//         num = Number(num);
//         if (!(num < 256 && num >= 0))
//             return false;
//         return true;
//     });
// }