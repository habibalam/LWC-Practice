import { api, LightningElement } from 'lwc';

export default class ChildLWC extends LightningElement {

    @api pubValue;
    @api isShown;
}