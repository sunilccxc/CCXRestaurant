import { LightningElement, wire,api } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class ComponentB extends LightningElement {
  @api value;

  @wire(getValue)
  wiredValue({ data, error }) {
    if (data) {
      this.value = data;
    } else if (error) {
      console.error(error);
    }
  }

  connectedCallback() {
    registerListener('valuechange', this.handleValueChange, this);
  }

  disconnectedCallback() {
    unregisterAllListeners(this);
  }

  handleValueChange(value) {
    getValue({ newValue: value }).then(() => {
      // The value has changed, so the component will be rerendered automatically
    });
  }
}
