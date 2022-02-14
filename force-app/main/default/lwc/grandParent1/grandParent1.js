import { LightningElement,api} from 'lwc';

export default class GrandParent1 extends LightningElement {

    @api name;
    
    handleEventChange (event){
   
           this.name=event.detail;
       }

}