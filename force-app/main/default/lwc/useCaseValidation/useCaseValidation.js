import { LightningElement } from 'lwc';

export default class UseCaseValidation extends LightningElement {
    
    dateError = false;
    errorMessage;
    startDate;
    endDate;

    handleDateChange = (event) =>
    {
        let dateType = event.target.name;
        if (dateType === 'startDate') {
            this.startDate = event.target.value;
            if (this.endDate && this.startDate > this.endDate) {
                this.dateError = true;
                this.errorMessage = 'Start Date cannot be greater than the End Date';
            }
            else {
                this.dateError = false;
            }
        }

        else if (dateType === 'endDate') {
            this.endDate = event.target.value;
            if (this.startDate && this.startDate > this.endDate) {
                this.dateError = true;
                this.errorMessage = 'Start Date cannot be greater than the End Date';
            }
            else {
                this.dateError = false;
            }
        }
    }

}