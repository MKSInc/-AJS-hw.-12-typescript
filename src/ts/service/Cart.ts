import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const itemIndex = this._items.findIndex((findItem) => item.id === findItem.id);
    if (itemIndex !== -1) {
      if (item.hasOwnProperty('count')) {
        this._items[itemIndex].count! += 1;
        return;
      } else return;
    }
    this._items.push({ ...item });
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getFullPrice(): number {
    return this._items.reduce((sum, item) => {
      let count = 1;
      if (item.hasOwnProperty('count')) count = item.count!;
      return sum + item.price * count;
    }, 0)
  }

  getFullDiscountedPrice(discount: number): number {
    let fullPrice = this.getFullPrice();
    return fullPrice -= fullPrice * discount / 100;
  }

  deleteItem(itemID: number): void {
    const itemIndex = this._items.findIndex((item) => item.id === itemID);
    if (itemIndex !== -1) {
      if (this.items[itemIndex].hasOwnProperty('count')) {
        if (this.items[itemIndex].count! > 1) {
          this.items[itemIndex].count! -= 1;
          return;
        }
      }
      this._items.splice(itemIndex, 1);
    }
    else console.log('Неправильный ID товара');
  }
}
