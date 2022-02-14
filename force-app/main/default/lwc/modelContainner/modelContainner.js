import { LightningElement,api} from 'lwc';

export default class ModelContainner extends LightningElement {

    @api accInfo;

    closeModal =()=>{
       this.dispatchEvent(new CustomEvent("closemodal"))

    }
}