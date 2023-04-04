import { LightningElement,api,track } from 'lwc';

export default class CCXR_MenuScreen extends LightningElement {
    @api token;
    @api table;
    @api id;
    @api csn;
    @api cname;
}