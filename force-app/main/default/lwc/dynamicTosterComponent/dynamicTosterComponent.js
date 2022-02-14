import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class DynamicTosterComponent extends LightningElement {

    tostTitle;
    toastMessage;
    toastVariantType;
    tostTitleMode;

    variantDefaultValue = 'info';
    modeDefaultValue = 'dismissible';


    get variantOptions() {
        return [

            { label: 'Info', value: 'info' },
            { label: 'warning', value: 'warning' },
            { label: 'Success', value: 'success' },
            { label: 'Error', value: 'error' },

        ];
    }



    get modeOptions() {

        return [

            { label: 'Dismissible', value: 'dismissible' },
            { label: 'Pester', value: 'pester' },
            { label: 'Sticky', value: 'sticky' },
        ];

    }

    handleToastContent = (event) => {

        let inputValue = event.target.value;
        if (event.target.name == 'form-title') {
            this.toastTitle = inputValue;
        } else if (event.target.name == 'form-message') {
            this.toastMessage = inputValue;
        } else if (event.target.name == 'form-variant-type') {
            this.toastVariantType = inputValue;
        } else if (event.target.name == 'form-mode-type') {
            this.toastMode = inputValue;

        }

    }


    handleShowTost = () => {

        const event = new ShowToastEvent({

            title: this.toastTitle,
            message: this.toastMessage,
            variant: this.toastVariantType,
            mode: this.toastMode

        });

        this.dispatchEvent(event);

    }


}