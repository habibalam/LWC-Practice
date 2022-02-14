import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MyTestAppVariantComponent extends LightningElement {

    @track welcome='This is my testing application'

    title;
    message;
    variant;
    mode;

        handleactions = (event) => {
        console.log('this is input filed');

        let inputVal= event.target.value;
        if(event.target.name=== 'Title'){
            this.title=inputVal;
        }
        else if(event.target.name==='Message'){
            this.message=inputVal;

        }
         else if(event.target.name ==='variant'){
             this.variant=inputVal;
         }
          else if( event.target.name ==='Mode'){
              this.mnode=inputVal;
          }
    }


    handleDynamicToast =() =>{
 
        const toaster = new ShowToastEvent({
         
         title:this.title,   
         message:this.message,
         variant:this.variant,
         mode:this.mode

        });
        this.dispatchEvent(toaster);

    }

}