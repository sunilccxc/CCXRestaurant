import { LightningElement } from 'lwc';

export default class ComponentA extends LightningElement {
  handleChange(event) {
    const value = event.target.value;
    const evt = new CustomEvent('valuechange', { detail: value });
    this.dispatchEvent(evt);
  }
}
