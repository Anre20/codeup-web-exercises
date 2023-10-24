const findLongestWord = () => {
let strSplit = str.split(" ");
    console.log(strSplit)
    let longestWord = 0;
    for(let word of strSplit) {
        if(strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
            result = word;
        }

    }

}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: jumped


