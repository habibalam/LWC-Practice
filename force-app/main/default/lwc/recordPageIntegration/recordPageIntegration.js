import { api, LightningElement, track } from 'lwc';
//import { showToastEvent } from 'lightning/platformShowToastEvent';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordPageIntegration extends LightningElement {

    @api objectApiName;
    @api recordId;
   
     title;
     message;
     variant;
     mode;
   
      variantDefaultValue = 'Success';
      get variantOptions() {
        return [

            { label: 'Info', value: 'info' },
            { label: 'warning', value: 'warning' },
            { label: 'Success', value: 'success' },
            { label: 'Error', value: 'error' },

        ];
    }


    handleToast = () =>
        {
            const toaster = new ShowToastEvent({
                title: 'Message From Salesforce',
                message: `You are in a ${this.objectApiName} record and the id is ${this.recordId}`,
                //variant: 'warning',
                mode: 'sticky',
                variant: 'success',
                mode: 'perster'
            });
            this.dispatchEvent(toaster);
        }


        /*changeHandler = (event)=>{

         let inputVal=event.target.value;
         if(event.target.name==='TitleName'){
             this.title =inputVal;
         }

         if(event.target.name==='Message'){
            this.message =inputVal;
        }

        if(event.target.name==='variant'){
            this.variant =inputVal;
        }

        if(event.target.name==='Mode'){
            this.mode =inputVal;
        }

       

    }
   
    handleToasts =()=>{
        const toaster = new ShowToastEvent({
          
            title:this.title,
            message:this.message,
            variant:this.variant,
            mode: this.perster

        });
        this.dispatchEvent(toaster);
    }*/

    handlekeyup = (event) =>{    
    console.log('input field ');
    let inputVal = even.target.value;
    
      if(event.target.name ==='Title'){
          this.title=inputVal;
      }

      else if(event.target.name === 'Message'){
        this.message=inputVal;
      }

     else if(event.target.name ==='variant'){
        this.variant=inputVal;
      }
      else if(event.target.name ==='Mode'){
          this.mode=inputVal;
      }
      

    }


    handleDynamicToast = () =>{
        console.log('click me button');
      const  DynamicsToaster = new ShowToastEvent({
        title: this.title,
        message: this.message,
        variant: this.variant,
         mode: this.mode

        });
        this.dispatchEvent(DynamicsToaster);
    }

}