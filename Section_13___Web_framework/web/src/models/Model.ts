import { AxiosPromise, AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(id: T): AxiosPromise;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: Attributes<T>,
    private events: Eventing,
    private sync: Sync<T>
  ) {}

  // computed property. Typescript calls this accessors
  // See video 179 (3min) for the explanation on why this is possible
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set = (update: T): void => {
    this.attributes.set(update);
    this.events.trigger('change');
  };

  fetch = (): void => {
    const id = this.attributes.get('id');
    // if we don't have an any, this user is not in the db
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      // using the set in our class so it calls the trigger event
      this.set(response.data);
    });
  };

  save = (): void => {
    const userData = this.attributes.getAll();
    this.sync
      .save(userData)
      .then((resposne: AxiosResponse) => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  };
}
