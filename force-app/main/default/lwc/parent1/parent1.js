import { LightningElement,api } from 'lwc';

export default class Parent1 extends LightningElement {

 @api name;

 handleEventChange (event){

        this.name=event.detail;
        const sampleevent=new CustomEvent('inputevent',{
        detail:this.name
   
         });
         this.dispatchEvent(sampleevent);
    }
  

}