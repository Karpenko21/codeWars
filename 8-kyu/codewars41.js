function fixTheMeerkat(arr) {
    a = arr [0];
    arr[0] = arr[2];
    arr [2] = a;
    return arr;
   }