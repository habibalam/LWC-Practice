import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.phone';
import IND_FIELD from '@salesforce/schema/Account.Name';


export default class WireServicejstest extends LightningElement {

    recordId = "";
    account = "";
    phone = "";
    industry= "";

    @wire(getRecord ,{
        recordId: "$recordId",
        fields : [NAME_FIELD,PHONE_FIELD,IND_FIELD]
    })

    wiredRecord({data}){
        if(data){
            this.account = data;
            console.log(JSON.stringify(data));
            this.name= data.fields.Name.value;
            this.phone = data.fields.phone;
            this.industry = data.fields.Industry.value;
        }
    

}

}