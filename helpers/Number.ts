export class Numbers {
  constructor() {}

  isNumber(value: unknown): value is number {
    return typeof value === "number";
  }
  isArrNumber(arr: unknown[]): arr is number[] {
    return typeof arr[0] === "number";
  }
}
