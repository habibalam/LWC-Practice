import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import sample from '@salesforce/resourceUrl/sample';

export default class UseExternalJs extends LightningElement {

    elements;
    moreElements;

    connectedCallback()
    {
        loadScript(this, sample + '/sample.js').then(() =>
        {
            console.log('Loaded JS');
            this.elements = samplejs.getList();
            this.moreElements = samplejs.getAnotherList();
            console.log(this.moreElements);
        })
    }

}