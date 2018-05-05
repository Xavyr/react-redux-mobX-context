import { observable, computed, action } from "mobx";

export default class NasaStore {
  @observable title;
  @observable copyright;
  @observable date;
  @observable explanation;
  @observable image;
  @observable showflag;

  constructor() {
    this.title = null,
    this.copyright = null,
    this.date = null,
    this.explanation = null,
    this.image = null,
    this.showFlag = false
  }

  @computed
  get changeShowFlag() {
    return this.nasaState.showFlag;
  }

  @action
  fillWithData(allData) {
    this.nasaState.title = "FUCK YEAH"
    return this.nasaState;
  }
}
