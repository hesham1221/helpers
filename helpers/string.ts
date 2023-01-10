export class Strings {
  constructor() {}
  isString(value: unknown): value is string {
    return typeof value === "string";
  }
  isArrString(arr: unknown[]): arr is Array<string> {
    return typeof arr[0] === "string";
  }
}
