import { LightningElement,track,api, wire } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { SearchOpportunities } from '@salesforce/apex/OpportunitySearchController.SearchOpportunities';

export default class UiSearchElementUpdate extends LightningElement {

    @api keyinput;
    @track getOpportunityRecord;
    @track error;


    handleChange = () =>{
        let inputVal = event.target.value;
        this.keyinput=inputVal;
        console.log(event.target.value);
    }

   @wire(SearchOpportunities,{keyinput: '$keyinput'})
   opportunitiesData({data,error}){
      if(data){
          console.log(data);
          this.getOpportunityRecord =data;
          this.error = undefined;

      }
   }  
 
   handleSearchAccount = ()=>{

    console.log('click me');
   }

}