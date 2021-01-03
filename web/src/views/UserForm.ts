import { User, UserProps } from '../models/User';
import { View } from './View';

// this is a view class
export class UserForm extends View<User, UserProps> {
  onDragDiv = (): void => {
    console.log('HEEELLLW');
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      'mouseenter:h1': this.onHeaderHover,
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveModelClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSaveModelClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent?.querySelector('input');
    if (input) {
      const name = input?.value;
      this.model.set({ name });
    }
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
        <input class="name" placeholder="${this.model.get('name')}"/>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set random age!</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
