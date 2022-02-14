import { LightningElement,wire} from 'lwc';
import fetchFewContacts from '@salesforce/apex/ContactController.fetchFewContacts';
import { publish, MessageContext } from 'lightning/messageService';
import contactMessageChannel from '@salesforce/messageChannel/contactMessageChannel__c';

export default class LmsContactpublisher extends LightningElement {

 messagecontext;
 name;
 recordData;
 recordname;

    @wire(MessageContext)
    messageContext;

    handleChange =(event)=>{
        this.name = event.target.name;
       
    }

    handlePublish = () =>
    {
        fetchFewContacts({ accname: this.name })
            .then(response =>
            {
                this.recordData = response;
              
                console.log('Data'+JSON.stringify(this.recordData));
                publish(this.messageContext,contactMessageChannel, this.recordData);
            })
    }
}