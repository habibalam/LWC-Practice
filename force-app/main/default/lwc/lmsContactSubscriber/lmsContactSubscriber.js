import { LightningElement } from 'lwc';
import contactMessageChannel from '@salesforce/messageChannel/contactMessageChannel__c';

export default class LmsContactSubscriber extends LightningElement {


    @wire(MessageContext)
    messageContext;
    receivedMessage;
    name;
    phone;
    source;
    showData = false;
    connectedCallback()
    {
        console.log('ConnectedCallback of Subscriber');
        this.subscribeMessageChannel();
    }



}