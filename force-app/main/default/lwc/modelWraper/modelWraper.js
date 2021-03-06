import { LightningElement,api } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccount';
export default class ModelWraper extends LightningElement {

    @api recordId;
    isModalOpen = false;
    account;

    connectedCallback()
    {
        getAccount({ accId: this.recordId })
        .then(response => {this.account = response})
    }

    handleModalOpen = () =>
    {
        this.isModalOpen = true;
    }

    handleModalClose =()=>{

        this.isModalOpen = false;
    }
}