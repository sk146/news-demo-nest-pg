export class Tag {
  constructor(public readonly name: string) {}
  [Symbol.toPrimitive](hint: string) {
    if (hint === 'string') {
      return this.name;
    }
  }
}
