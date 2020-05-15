import { RootStore } from "./rootStore";
import { observable, action } from "mobx";

export default class CommonStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable token: string | null = window.localStorage.getItem('jwt');
  @observable appLoaded = false;

  @action setToken = (token: string | null) => {
    this.token = token;
  };

  @action setAppLoaded = () => {
      this.appLoaded = true;
  }
}
