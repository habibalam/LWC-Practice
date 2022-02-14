import { LightningElement,track, wire} from 'lwc';
import getAccountss from '@salesforce/apex/AccountsController.getAccountss';

export default class DataTableWithWire extends LightningElement {

@track data;
@track columns = [

              {label:'label', fieldName:'Name',type: 'text'},
              {label:'Phone', fieldName:'Phone',type: 'phone'},
              {label:'Industry', fieldName:'Industry',type: 'text'}
];

@wire (getAccountss)
accountRecords({data, error}){
    if(data){
        this.data = data;
    }
    else if(error){
        this.data = undefined;
    }
}

}