import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element | null, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  /* fragment is a reference to an HTML element to be inserted into the DOM
  at this point in time, the element is just a string, like our template*/
  bindEvents = (fragment: DocumentFragment): void => {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      // deconstructor. Ex: click:button
      const [eventName, eventSelector] = eventKey.split(':');
      fragment.querySelectorAll(eventSelector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  };

  mapRegions = (fragment: DocumentFragment): void => {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  };

  onRender = (): void => {};

  render(): void {
    // clear the HTML in the screen
    if (this.parent) this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    if (this.parent !== null) {
      this.parent.append(templateElement.content);
    }
  }
}
