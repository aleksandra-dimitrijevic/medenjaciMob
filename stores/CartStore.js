import { observable, action, computed} from 'mobx';
import { makeAutoObservable } from "mobx";

class CartStore {
  @observable cart = [];
  
  @observable count = 1;
  constructor() {
      makeAutoObservable(this);
    }

  @computed get currentCount() {
    return this.count;
  }

  @action increment = () => {
    this.count =  -this.count*(-1)+1;
  }

  @action decrement = () => {
    if (this.count > 1) this.count = this.count - 1;
  }

  @action addProduct = (product) => {
    this.cart.push({product: product,count: this.count});
    this.count = 1;
  }

  @action makeOrder = () => {
    this.cart = []
  }
  
}

export default new CartStore();