import { observable, action, computed, reaction, makeAutoObservable } from 'mobx';
import {users} from '../data/users';
import CartStore from "./CartStore";

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
  @observable error;
  @observable success;

  constructor(users){
    makeAutoObservable(this);
    this.users = users;

    reaction(() => this.currentUser, () => {
      this.inputs = initialInputs;
      this.errors = initialInputs;
    });

    reaction(() => this.success?.length > 0, () => {
      setTimeout(() => this.success = undefined, 1500);
    })
  }

  @computed get isLoggedIn() {
    return Boolean(this.currentUser);
  }
  @action reset = () =>{
    this.errors = initialInputs;
  }

  @action logIn = () => {
    if (this.validateLogIn()) {
      this.currentUser = this.users
        .find( user => user.username === this.inputs.username && user.password === this.inputs.password);
      if(!this.currentUser) {
        this.error = 'Wrong username or password!'
        return;
      }
      this.error= undefined;
      CartStore.onInit(this.currentUser);
    }
    else {
      this.error = 'All fields are required!'
    }
  }

  @action logOut = () => {
    this.currentUser = undefined;
  }

  @action register  = () => {
    const { inputs } = this;
    if (this.validateRegister()) {
      if(this.users.find(u => u.username === inputs.username)){
        this.error = 'Username already taken!'
        return;
      }
      if(inputs.password !== inputs.repeatedPassword){
        this.error = 'Passwords not the same!'
        return;
      }
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
      this.error= undefined;
      CartStore.onInit(this.currentUser);
    }
    else {
      this.error = 'All fields are required!'
    }
  }

  @action changeUserInfo = (info) => {
    if(this.validateUserInfo(info)) {
      const index = this.users.findIndex(user => user.id === this.currentUser.id);
      if(!this.currentUser) return;
      this.currentUser.firstName = info.firstName;
      this.currentUser.lastName = info.lastName;
      this.currentUser.phoneNumber = info.phoneNumber;
      this.currentUser.address = info.address;
      this.users[index] = this.currentUser;
      this.success='Successfully changed!';
      this.error = undefined;
    }
    else {
      this.error = 'All fields are required!'
      this.success = undefined;
    }
  }

  @action changeUserPassword = () => {
    if(this.validateChangePass()) {
      const index = this.users
        .findIndex(user => user.username === this.inputs.username && user.password === this.inputs.password);
      if (index === -1) {
        this.error = 'Wrong password!';
        this.success = undefined;
        return;
      }
      this.currentUser.password = this.inputs.repeatedPassword;
      this.users[index] = this.currentUser;
      this.success='Successfully changed!'
      this.error = undefined;
    }
    else {
      this.error = 'All fields are required!'
      this.success = undefined;
    }
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
  validateUserInfo = (info) => {

    this.errors = {
      firstName: !info.firstName ? 'First name is required' : undefined,
      lastName: !info.lastName ? 'Last name is required' : undefined,
      phoneNumber: !info.phoneNumber ? 'Phone number is required' : undefined,
      address: !info.address ? 'Address is required' : undefined,
    }
    return Object.values(this.errors).filter((value) => value !== undefined).length === 0;
  }

  validateChangePass = () => {
    const { inputs } = this;

    this.errors = {
      username:  !inputs.username ? 'Username is required' : undefined,
      password:  !inputs.password ? 'Password is required' : undefined,
      repeatedPassword: !inputs.repeatedPassword ? 'Repeated password is required' : undefined
    }
    return Object.values(this.errors).filter((value) => value !== undefined).length === 0;
  }
}

export default new AuthStore(users);