import { observable, action, computed} from 'mobx';
import { makeAutoObservable } from "mobx";
import AuthStore from "./AuthStore";

class CartStore {
  @observable cart = [];
  @observable carts = new Map();
  @observable count = 1;
  constructor() {
      makeAutoObservable(this);
    }

  @computed get currentCount() {
    return this.count;
  }

  @action onInit = (currentUser) => {
    this.cart = this.carts.get(currentUser.username);
    if(!this.cart){
      this.carts.set(currentUser.username,[]);
      this.cart = this.carts.get(currentUser.username);
    }
  }

  @action increment = () => {
    this.count =  -this.count*(-1)+1;
  }

  @action decrement = () => {
    if (this.count > 1) this.count = this.count - 1;
  }

  @action addProduct = (product, username) => {
    this.cart.push({product: product,count: this.count});
    this.carts.set(username,this.cart);
    this.count = 1;
  }

  @action makeOrder = () => {
    this.cart = [];
    this.carts.set(AuthStore.currentUser.username,[]);
  }
  
}

export default new CartStore();