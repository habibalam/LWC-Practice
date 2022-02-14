import { LightningElement ,track,api,wire} from 'lwc';
import getAccountsByIndustryOrName from '@salesforce/apex/AccountSearch.getAccountsByIndustryOrName';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import static_resource from '@salesforce/resourceUrl/MobileImages';

export default class AccountFilterApp extends LightningElement {

    @track listOfAccounts;
    recordTypeId;
    industryOptions;
    industrySearchValue;
    nameSearchValue;
    //img3 = static_resource + '/img3.jpg';

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    getRecordType({data, error}){
        if(data){
            console.log(JSON.stringify(data.defaultRecordTypeId));
            this.recordTypeId = data.defaultRecordTypeId;
        }else if(error){
            console.log("Error Getting Contact RecordTypes=>", JSON.stringify(error));
        }
    }
 
    @wire(getPicklistValues, {recordTypeId: "$recordTypeId", fieldApiName: INDUSTRY_FIELD})
    industryPicklistValues({data, error}){
        if(data){
            this.industryOptions = data.values;
        }else{
            console.log("Error fetching industryPicklistValues");
            console.log(JSON.stringify(error));
        }
    }
 
    handleSearch = () =>{
        this.industrySearchValue = this.template.querySelector('.industry-searchbox').value;
        this.nameSearchValue = this.template.querySelector('.name-searchbox').value;
        if(!this.industrySearchValue && !this.nameSearchValue){
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error',
                message: `Type a name to search`,
                variant: 'error',
                mode: 'sticky'
            }));
        }else{
            if(!this.industrySearchValue){
                this.industrySearchValue = '';
            }else if(!this.nameSearchValue){
                this.nameSearchValue = '';
            }
            getAccountsByIndustryOrName({industry: this.industrySearchValue, accountName: this.nameSearchValue})
            .then(accounts =>{
                this.listOfAccounts = accounts;
            })
            .catch(error =>{
                console.log("error while getting accounts=>", JSON.stringify(error));
            })
        }
    }
 




}