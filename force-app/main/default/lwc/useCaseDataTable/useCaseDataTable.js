import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

 const columns = [
        
        {
            label : 'Name', fieldName: 'Name',type:'text', sortable : true
        },
        {
            label : 'phone', phone: 'Name',type:'phone', 
        },

        {
            label : 'Industry', fieldName: 'Industry',type:'text', sortable : true
        },

        {
            label : 'AnnualRevenue', fieldName: 'AnnualRevenue',type:'text', sortable : true
        }
  ]

  export default class UseCaseDataTable extends LightningElement {

    accountColumns = columns ;
    searchedAccountData = [];
    AccountAllData = [];
    searchString;
    sortBy;
    sortDirection;
    error;

    @wire(getAccounts)
    wiredAccounts({data,error}){

        if(error){
            this.error = error;
        }
        else if(data){
            this.accountAllData = data;
            this.searchedAccountData = [...this.accountAllData];
        }
    }

    searchDataTable = (event) =>{

        let searchString = event.target.value;
        let allRecords = this.accountAllData;

        if(searchString && searchString !== ''){
            this.searchedAccountData = allRecords.filter(record =>
                {

                    return record.Name.toUpperCase().includes(searchString.toUpperCase());

                })
          }
          else{  
            this.searchedAccountData = this.accountAllData;
          }
    }
    handleSortData = (event) =>
    {
        this.sortBy = event.detail.fieldName;
        this.sortDirection = event.detail.sortDirection;

        this.sortData(this.sortBy, this.sortDirection);
    }

    sortData = (fieldName, direction)=>
    {
        let parseData = JSON.parse(JSON.stringify(this.searchedAccountData));
        let keyValue =(record)=>
        {
            return record[fieldName];
        }

        let isReverse = direction === 'asc' ? 1 : -1;
        
        parseData.sort((x ,y)=>
        {
            x = keyValue(x) ? keyValue(x): '';
            x = keyValue(y) ? keyValue(y): '';
            return isReverse * ((x > y) - (y > x))


        });
        this.searchedAccountData = parseData;
    }


}