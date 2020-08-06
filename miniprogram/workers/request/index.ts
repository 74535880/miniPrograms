// class DealArray<T> {
//   constructor(public readonly arr: T[]) {}
//   // 快速排序
//   quickSort(left: number, right: number): T[] {
//     if (left >= right || this.arr.length <= 1) {
//       return this.arr;
//     }
//     let j = left + 1,
//       middle = this.arr[left],
//       arr = this.arr;
//     for (let i = left + 1; i < right; i++) {
//       if (arr[i] <= middle) {
//         [arr[j], arr[i]] = [arr[i], arr[j]];
//         j++;
//       }
//     }
//     [arr[left], arr[j - 1]] = [arr[j - 1], arr[left]];
//     this.quickSort(left, j - 1);
//     this.quickSort(j, right);
//     return arr;
//   }
// }
// const arrObj = new DealArray([2, 1, 1, 4, 5, 2, 7, 23, 67]);

// const newArr = arrObj.quickSort(0, arrObj.arr.length);
// console.log(newArr, '\r\n');

/**
 * 这是worker相应代码
 */

// 这个文件下面，是在另一个线程执行的。所以，当这个线程执行完成以后，把数据发送给主线程。或者主线程发送数据给
// 这个线程，这个线程接受。
worker.postMessage({type: 'sss'})