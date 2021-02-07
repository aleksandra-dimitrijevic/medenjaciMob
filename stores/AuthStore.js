import { observable, action, computed, reaction, makeAutoObservable } from 'mobx';
import {users} from '../data/users'

const initialInputs = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    userType: '',
    username: '',
    password: '',
    repeatedPassword: ''
  }

class AuthStore {
  
  @observable users = [];
  @observable currentUser;

  @observable inputs = initialInputs;
  @observable errors = initialInputs;

  constructor(users){
    makeAutoObservable(this);
    this.users = users;

    reaction(() => this.currentUser, () => {
      this.inputs = initialInputs;
      this.errors = initialInputs;
    })
  }

  @computed get isLoggedIn() {
    return Boolean(this.currentUser);
  }

  @action logIn = () => {
   
    if (this.validateLogIn()) {
      this.currentUser = this.users
        .find( user => user.username === this.inputs.username && user.password === this.inputs.password);
    } 
  }

  @action logOut = () => {
    this.currentUser = undefined;
  }

  register  = () => {
    const { inputs } = this;
    if (this.validateRegister()) {
      this.currentUser = {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        phoneNumber: inputs.lastName,
        address: inputs.address,
        userType: 'customer',
        username: inputs.username,
        password: inputs.password
      }
      this.users.push(this.currentUser);
    } 
  }

  changeUserInfo = () => {

  }

  changeUserPassword = () => {

  }

  validateLogIn = () => {
    const { inputs } = this;

    this.errors = {
      username:  !inputs.username ? 'Username is required' : undefined,
      password:  !inputs.password ? 'Password is required' : undefined,
    }
    return Object.values(this.errors).filter((value) => value !== undefined).length === 0;
  }

  validateRegister = () => {
    const { inputs } = this;

    this.errors = {
      firstName: !inputs.firstName ? 'First name is required' : undefined,
      lastName: !inputs.lastName ? 'Last name is required' : undefined,
      phoneNumber: !inputs.phoneNumber ? 'Phone number is required' : undefined,
      address: !inputs.address ? 'Address is required' : undefined,
      username:  !inputs.username ? 'Username is required' : undefined,
      password:  !inputs.password ? 'Password is required' : undefined,
      repeatedPassword: !inputs.repeatedPassword ? 'Repeated password is required' : undefined
    }
    return Object.values(this.errors).filter((value) => value !== undefined).length === 0;
  }
}

export default new AuthStore(users);