import Buyable from './Buyable';

export default class Smartphone implements Buyable {
  count: number;
  constructor(
    readonly id: number,
    readonly name: string,
    readonly manufacturer: string,
    readonly price: number,
    readonly slogan: string,
    count: number,
  ) {
      this.count = count;
  }
}
