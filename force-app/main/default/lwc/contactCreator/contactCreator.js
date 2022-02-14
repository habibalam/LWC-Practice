import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {

@api objectApiName;

fields=[FIRSTNAME_FIELD,LASTNAME_FIELD,EMAIL_FIELD];

handleSuccess = (event) =>{
  const toaster = new ShowToastEvent({

     title: "Account is Create",
     message: "Recod id"+event.detail.id,
     variant: "success"

  });

      this.dispatchEvent(toaster);
   }
}