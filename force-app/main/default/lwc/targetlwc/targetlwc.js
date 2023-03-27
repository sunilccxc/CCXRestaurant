import { LightningElement, api } from 'lwc';

export default class Childlwc extends LightningElement {
    @api ParentMessage = '';
}