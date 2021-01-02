import { User } from '../models/User';

// this is a view class
export class UserForm {
  constructor(public parent: Element | null, public model: User) {
    this.bindModel();
  }

  bindModel = (): void => {
    this.model.on('change', () => {
      this.render();
    });
  };

  onDragDiv = (): void => {
    console.log('HEEELLLW');
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
      'click:.set-age': this.onSetAgeClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onButtonClick = (): void => {
    console.log('Button clicked');
  };

  onHeaderHover = (): void => {
    console.log('Mouse has entered the h1 part');
  };

  template(): string {
    return `
      <div>
        <h1>User Form!</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button>Click here!</button>
        <button class="set-age">Set random age!</button>
      </div>
    `;
  }

  /* fragment is a reference to an HTML element to be inserted into the DOM
  at this point in time, the element is just a string, like our template*/
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      // deconstructor. Ex: click:button
      const [eventName, eventSelector] = eventKey.split(':');
      fragment.querySelectorAll(eventSelector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    // clear the HTML in the screen
    if (this.parent) this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    if (this.parent != null) {
      this.parent.append(templateElement.content);
    }
  }
}
