export default class EventLabel {
  private eventTriggered: boolean = false;

  set value(value: boolean) {
    this.eventTriggered = value;
    if (value) {
      setTimeout(() => this.eventTriggered = false, 250);
    }
  }

  public get styleAttribute() {
    return this.eventTriggered
      ? { color: 'red' }
      : null;
  }
}
