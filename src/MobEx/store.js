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

  // @action currentFlag() {
  //   if(this.title) {
  //     return this.showFlag;
  //   }
  // }
//
// @computed get title() {
//     return this.nasaState.title;
//   }
//
//   @action
//   fillWithData(allData) {
//     this.nasaState.title = allData;
//     return this.nasaState;
//   }
}

let nasaStore = new Store();

export default nasaStore;
