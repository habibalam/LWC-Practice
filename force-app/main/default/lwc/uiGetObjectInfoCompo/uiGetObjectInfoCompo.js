import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class UiGetObjectInfoCompo extends LightningElement {
    
    //public static void getAccount(id accountId)
    @wire(getObjectInfo,{objectApiName: ACCOUNT_OBJECT})
    objectInfo;


    get objectInfoStr(){

        if(this.objectInfo.data){
        return JSON.stringify(this.objectInfo.data);
        }
        return JSON.stringify(this.objectInfo.error);
    }

}