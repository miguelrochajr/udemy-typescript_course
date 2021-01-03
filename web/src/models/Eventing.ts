// type alias
// if we had () => {}, we were saying this is a function that returnas an object
type Callback = () => void;

export class Eventing {
  // events is an object which its keys are strings that
  // have a list of Callbacks as its values
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    // this.events[eventName] can be Callback[] or undefined
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  };
}
