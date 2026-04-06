// function reverseSort(arr) {
//     arr.sort(function(a, b) {
//         return b - a; 
//     });
// }






// завдання 10


function unique(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}