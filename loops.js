var arr = new Array();
arr.push('Android');
arr.push('iOS');
arr.push('windows');
arr.push('java');
arr.push('php');
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach(function (el, ind) { return console.log(ind, el); });
