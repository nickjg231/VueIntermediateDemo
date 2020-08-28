import _ from 'lodash';

export default class EventLabel {
  private eventTriggered: boolean = false;
  private debouncedEventTrigger: any;

  constructor() {
    this.debouncedEventTrigger = _.debounce(() => this.eventTriggered = false, 250);
  }

  set value(value: boolean) {
    this.eventTriggered = value;
    if (value) {
      this.debouncedEventTrigger();
    }
  }

  public get styleAttribute() {
    return this.eventTriggered
      ? {color: 'red'}
      : null;
  }
}
