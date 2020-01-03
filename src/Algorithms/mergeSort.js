const mergeSort = (array, p, r) => {
    if (p !== r) {
        // Divide
        const q = Math.floor((p+r)/2);

        // Conquer
        mergeSort(array, p, q);
        mergeSort(array, q+1, r);

        // Merge
        merge(array, p, q, r);

        console.log(array);
        return array;
    }

    return array;
};


const merge = (array, p, q, r) => {
    let lowHalf = [];
    let highHalf = [];
    let k = p;

    for (let i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (let j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    let i = 0;
    let j = 0;


    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i += 1;
        } else {
            array[k] = highHalf[j];
            j += 1;
        }
        k += 1;
    }

    while (i < lowHalf.length) {
        array[k] = lowHalf[i];
        i += 1;
        k +=1;
    }

    while (j < highHalf.length) {
        array[k] = highHalf[j];
        j += 1;
        k += 1;
    }

    return array;
};

export default mergeSort;
