import { observable, computed, action } from "mobx";

class Store {
  @observable title;
  @observable copyright;
  @observable date;
  @observable explanation;
  @observable image;
  @observable showFlag;

  constructor() {
    this.title = null,
    this.copyright = null,
    this.date = null,
    this.explanation = null,
    this.image = null,
    this.showFlag = false
  }


  @computed currentFlag() {
    return this.showFlag;
  }
}

let nasaStore = new Store();

export default nasaStore;
