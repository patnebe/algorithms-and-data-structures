var swap = function (array, firstIndex, secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};


var partition = function (array, p, r) {
	var lower = p;
	for (var unchecked = p; unchecked < r; unchecked++) {
		if (array[unchecked] <= array[r]) {
			swap(array, unchecked, lower);
			lower++;
		}
	}
	swap(array, r, lower);
	return lower;
};


const quickSort = function (array, p, r) {
	if (r > p) {
		// Choose the pivot
		var pivot = partition(array, p, r);
		// Quick sort the left
		quickSort(array, p, pivot - 1);
		// Quick sort the right
		quickSort(array, pivot + 1, r);
		return array;
	}
	return array;
};

export default quickSort;