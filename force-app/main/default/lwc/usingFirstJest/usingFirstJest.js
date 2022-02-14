import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class UsingFirstJest extends LightningElement {


    handleShowToast =() =>{
     this.dispatchEvent(
        new ShowToastEvent({
         title : "jest",
         message : "custome Toast fired",
         variant : "success"
        })
     );

    };

    handleTextChange = () =>{
        const para = this.template.querySelector(".paragraph");
        para.textContent = "changed pragraph";
    }

}