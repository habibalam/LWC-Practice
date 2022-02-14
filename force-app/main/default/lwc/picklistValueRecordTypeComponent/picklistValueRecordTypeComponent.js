import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account';


export default class PicklistValueRecordTypeComponent extends LightningElement {

industryValue;
industryValues;
recordTypeId;
@wire(getPicklistValuesByRecordType, {objectApiName: ACCOUNT_INDUSTRY,RecordTypeId: '0120000000000000AAA'} )

accountPicklists({data,err}){

    if(data){
        this.industryValues= data.picklistFieldValues.industry.values;
    }else if(error){
           console.log(JSON.stringify(error));
    }

    handleChange = (event) =>{
       
          console.log('select me')
            this.industryValue = event.target.value;
        
    }
}


}