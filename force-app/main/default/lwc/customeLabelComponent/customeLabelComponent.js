import { LightningElement } from 'lwc';
import greeting_label from '@salesforce/label/c.Greeting';

export default class CustomeLabelComponent extends LightningElement {

    greeting= greeting_label;
}