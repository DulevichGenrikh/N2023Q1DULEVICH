arr = [1, -2, 7, 5, 8, 6, 37];

function bubbleSort(arr) {

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}



console.log(bubbleSort(arr))