/* of course this is something you should require and that should work correctly  ... */
const bubble = require('./bubble-sort');

describe('the "bubble"', () => {
    describe('the "helpers.swapItems()" function', () => {

        const twoArray = ['A', 'B'];
        const threeArray = ['A', 'B', 'C'];
        const fourArray = [1, 2, 3, 4];

        it('swaps two items', () => {
            expect(bubble.helpers.swapItems(twoArray, 0, 1)).toEqual(['B', 'A']);
            expect(bubble.helpers.swapItems(threeArray, 0, 2)).toEqual(['C', 'B', 'A']);
            expect(bubble.helpers.swapItems(fourArray, 0, 3)).toEqual([4, 2, 3, 1]);
        });
    });

    describe('the "helpers.singleRun()" function', () => {

        let fourArray;
        let tenArray

        let fourMaxId;
        let tenMaxId

        beforeEach(() => {
            fourArray = [3, 4, 1, 2];
            fourMaxId = fourArray.length - 1;

            tenArray = [3, 1, 6, 7, 0, 4, 9, 2, 5, 8];
            tenMaxId = tenArray.length - 1;
        })

        it('sorts the highest number rightmost after one run', () => {
            bubble.helpers.singleRun(fourArray, fourMaxId);
            expect(fourArray[fourMaxId]).toEqual(4);

            bubble.helpers.singleRun(tenArray, tenMaxId);
            expect(tenArray[tenMaxId]).toEqual(9);
        });

        it('sorts the second highest number second last after the second run', () => {
            bubble.helpers.singleRun(fourArray, fourMaxId);
            bubble.helpers.singleRun(fourArray, fourMaxId - 1);

            expect(fourArray[fourMaxId - 1]).toEqual(3);

            bubble.helpers.singleRun(tenArray, tenMaxId);
            bubble.helpers.singleRun(tenArray, tenMaxId - 1);
            expect(tenArray[tenMaxId - 1]).toEqual(8);
        });
    });

    describe('the "sort()" function', () => {

        let fourArray;
        let sixArray;

        beforeEach(() => {
            fourArray = [3, 4, 1, 2];
            sixArray = [ 5, 3, 4, 1, 6, 2 ];
        });

        it('runs exactly array.length - 1 times', () => {
            bubble.sort(fourArray);
            expect(bubble.helpers.noOfRuns).toEqual(fourArray.length - 1);

            bubble.sort(sixArray);
            expect(bubble.helpers.noOfRuns).toEqual(sixArray.length - 1);
        });

        it('sorts the array given', () => {

            expect(bubble.sort(fourArray)).toEqual(fourArray.sort());
            expect(bubble.sort(sixArray)).toEqual(sixArray.sort());

        });
    });
});
