import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/contact';

export default class UiPaginationComponent extends LightningElement {

pageToken = null;
nextPageToken =null;
previousPageToken = null;
records;


@wire(getListUi, { objectApiName:CONTACT_OBJECT, listViewApiName:'AllConatacts',pageSize:7,pageToken:'$page'})
listView({data,error}){


    if(data){
        console.log(JSON.parse(JSON.stringify(data)));
        this.records=data.records.records;
        this.nextPageToken =data.records.nextPageToken;
        this.previousPageToken=data.records.previousPageToken;
    }
}

 handleNext = () =>{
     this.pageToken = this.nextPageToken;
 }

  handlePrevious =()=>{
      this.pageToken= this.previousPageToken;
  }
}