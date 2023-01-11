import { Numbers } from "./number";
import { Strings } from "./string";
export class Arrays {
  constructor() {}
  private readonly stringHelp: Strings = new Strings();
  private readonly numberHelp: Numbers = new Numbers();

  /* Read */

  last<T>(arr: T[]): T {
    return arr[arr.length - 1];
  }

  /**
     * @description
     * get the bigger value of an array (longest string , greatest number)
     *@example
      biggerValue(['t' , 'te' , 'tes']) // {value : 'tes' , index : 2}
      biggerValue([1 , 3 , 5]) // {value : 5 , index : 2}
     *
     */

  biggerValue(arr: Array<string | number>): {
    value: string | number;
    index: number;
  } {
    let biggerObj: { value: string | number; index: number };
    if (this.stringHelp.isArrString(arr)) {
      biggerObj = { value: "", index: -1 };
      for (let i = 0; i < arr.length; i++) {
        if (
          this.stringHelp.isString(biggerObj.value) &&
          arr[i].length > biggerObj.value.length
        ) {
          biggerObj = { value: arr[i], index: i };
        }
      }
    } else {
      biggerObj = { value: 0, index: -1 };
      if (this.numberHelp.isArrNumber(arr)) {
        for (let i = 0; i < arr.length; i++) {
          if (
            this.numberHelp.isNumber(biggerObj.value) &&
            arr[i] > biggerObj.value
          ) {
            biggerObj = { value: arr[i], index: i };
          }
        }
      }
    }
    return biggerObj;
  }

  /* Write */

  putAfterIndex<T>(arr: T[], startIndex: number, value: T): T[] {
    const firstSlice = arr.slice(0, startIndex + 1);
    const secondSlice = arr.slice(startIndex + 1);
    firstSlice.push(value);
    return [...firstSlice, ...secondSlice];
  }

  /* Create */

  makeOf<T>(value: T, length: number) {
    let newArr: T[] = [];
    for (let i = 0; i < length; i++) [newArr.push(value)];
    return newArr;
  }

  /**
     * @description
     * Make 2D array of a value with providing dimentions
     *@example
      const str2dArr = make2DOf('test' , '2x2') // [['test' , 'test'] , ['test' , 'test']]
      const num2dArr = make2DOf(1 , '2x3') // [[1 , 1 , 1] , [1 , 1 , 1]]
     *
     */

  make2DOf<T>(value: T, dimentions: string): Array<T[]> {
    const lowwerCaseD = dimentions.toLowerCase();
    if (!lowwerCaseD.match(/(\d+(?:)?)x(\d+(?:))/g))
      throw new Error("dimentions must be nXm");
    const firstD: number = +lowwerCaseD.split("x")[0];
    const secondD: number = +lowwerCaseD.split("x")[1];
    const arr: Array<T[]> = [];
    for (let i = 0; i < firstD; i++) {
      const arrOf = [];
      for (let j = 0; j < secondD; j++) {
        arrOf.push(value);
      }
      arr.push(arrOf);
    }
    return arr;
  }

  /* Transform */

  /**
     *@description
     * Transfer an array to key (index of element) value (value of the element) pair
     *@example
      toKeyValue(['test1','test2']) // {0 : 'test1' , 1 : 'test2'}
     *
     */

  toKeyValue<T>(arr: T[]): { [key: number]: T } {
    let returnedObj: { [key: number]: T } = {};
    arr.forEach((ele, i) => {
      returnedObj[`${i}`] = ele;
    });
    return returnedObj;
  }
}
