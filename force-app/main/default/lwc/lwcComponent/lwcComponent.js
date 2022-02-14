import { LightningElement, track } from 'lwc';

export default class LwcComponent extends LightningElement {

@track greeting='habib';

changeHandler(event){
    this.greeting=event.target.value;
}


}