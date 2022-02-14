import { LightningElement, track } from 'lwc';

export default class EmployeeDetailsComponent extends LightningElement {

    @track name;
    @track age;
    @track salary;
    @track qua;

    nameHandler(event){
        this.name=event.target.value;
    }

    ageHandler(event){
        this.age=event.target.value;
    }
    salHandler(event){
        this.salary=event.target.value;
    }
    quaHandler(event){
        this.qua=event.target.value;
    }
}
