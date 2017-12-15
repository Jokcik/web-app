export class Dummy {
  static factory<T>(classConstructor: new () => T, count: number) {
    return new Array(count).fill(new classConstructor());
  }
}
