import { LightningElement, track ,wire} from 'lwc';
import getAccounts from '@salesforce/apex/AccountsController.getAccounts';

export default class DisplayDataUsingWire extends LightningElement {
 @track data;
@wire(getAccounts) 
accountRecords({data , error}){
  
    if(data){
        this.data = data;

    }
    else if(error){
        this.data = undefined;
    }

}

}