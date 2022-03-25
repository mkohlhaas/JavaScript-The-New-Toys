const array = [42, 67, 3, 23, 14];
const filtered = array.filter(entry => entry < 30);
console.log(filtered); // [3, 23, 14]

// old way to do it (ES5):
// var array = [42, 67, 3, 23, 14];
// var filtered = array.filter(function(entry) {
//   return entry < 30;
// });
// console.log(filtered); // [3, 23, 14]
