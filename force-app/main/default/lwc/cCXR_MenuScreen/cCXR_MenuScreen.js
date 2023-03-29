import { LightningElement,api } from 'lwc';

export default class CCXR_MenuScreen extends LightningElement {
    @api token;
    @api id;
    @api table;
    @api cname;
    @api  csn;
connectedCallback(){
}
}