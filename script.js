function mincost(arr) { 
    if (arr.length === 1) return 0; // No cost if there's only one rope

    // Convert the array to a min-heap
    const minHeap = arr.slice();
    minHeap.sort((a, b) => a - b);

    let totalCost = 0;

    while (minHeap.length > 1) {
        // Get the two smallest elements
        const first = minHeap.shift();
        const second = minHeap.shift();

        // Cost to connect them
        const cost = first + second;
        totalCost += cost;

        // Insert the combined rope back into the heap
        minHeap.push(cost);

        // Re-sort to maintain heap property
        minHeap.sort((a, b) => a - b);
    }

    return totalCost;
}

// Example Usage:
// console.log(mincost([4, 3, 2, 6])); // 29
// console.log(mincost([1, 2, 3, 4, 5])); // 33

module.exports = mincost;
