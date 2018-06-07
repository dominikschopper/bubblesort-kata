const bubble = {
    helpers: {

        swapItems: (arr, idA, idB) => {
            const storeA = arr[idA];
            arr[idA] = arr[idB];
            arr[idB] = storeA;
            return arr;
        },

        singleRun: (arr, stopId) => {
            let grabId = 0;
            for (let i = 1; i <= stopId; i += 1) {
                if (arr[grabId] < arr[i]) {
                    grabId = i;
                }
            }
            bubble.helpers.swapItems(arr, grabId, stopId);
        },
        noOfRuns: 0
    },

    sort: (arr) => {
        bubble.helpers.noOfRuns = 0;
        const maxId = arr.length - 1;
        let startItem = 0;
        let willBeSorted = [...arr];

        for (let i = maxId; i > 0; i -= 1) {
            bubble.helpers.noOfRuns += 1;
            bubble.helpers.singleRun(willBeSorted, i);
        }

        return willBeSorted;
    }
};

module.exports = bubble;