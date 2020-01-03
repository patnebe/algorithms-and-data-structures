const mergeSortHelper = (mainArray, p, r, auxiliaryArray, animations) => {
    if (p !== r) {
        // Divide
        const q = Math.floor((p+r)/2);

        // Conquer
        mergeSortHelper(auxiliaryArray, p, q, mainArray, animations);
        mergeSortHelper(auxiliaryArray, q+1, r, mainArray, animations);

        // Merge
        merge(mainArray, p, q, r, auxiliaryArray, animations);

        // console.log(array);
    }
    return animations;
};

const mergeSort = (array) => {
  console.log('running merge sort');
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations);
  return animations;
};

const merge = (mainArray, p, q, r, auxiliaryArray, animations) => {
    // let lowHalf = [];
    // let highHalf = [];
    // let k = p;
    //
    // for (let i = 0; k <= q; i++, k++) {
    //     lowHalf[i] = array[k];
    // }
    // for (let j = 0; k <= r; j++, k++) {
    //     highHalf[j] = array[k];
    // }

    let k = p;
    let i = p;
    let j = q+1;


    while (i <= q && j <= r) {
      const animation = {};
      animation.comparison = [i, j];
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
          animation.swap = [k, i];
          mainArray[k] = mainArray[i];
          i += 1;
        } else {
          animation.swap = [k, j];
          mainArray[k] = mainArray[j];
          j += 1;
        }
        k += 1;
        animations.push(animation);
    }

    while (i <= q) {
        animations.push({
          comparison: [i, i],
          swap: [k, i]
        });
        mainArray[k] = auxiliaryArray[i];
        i += 1;
        k +=1;
    }

    while (j <= r) {
        animations.push({
          comparison: [j, j],
          swap: [k,j]
        })
        mainArray[k] = auxiliaryArray[j];
        j += 1;
        k += 1;
    }
};

export default mergeSort;
