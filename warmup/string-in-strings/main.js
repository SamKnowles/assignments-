


function charCount(char,str){
    var duplicates = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === myChar) {
        duplicates++;
      }
    }
    return duplicates;
  }

  console.log(getAppearances('a', 'assmaan'))


  function charCount(myChar, str) {
    var duplicates = 0;
   for (var i = 0; i < str.length; i++) {
     if (str[i] === myChar) {
       duplicates++;
     }
   }
   return duplicates;
 }
