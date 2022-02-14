import { LightningElement } from 'lwc';

export default class JoiningDateValidation extends LightningElement {

    joinDate;
    dateError = false;
    errorMessage ='';
 
    handleDateChange = (event)=>{

        this.joinDate= event.target.value;
      
        // let joindate = new Date('2021-07-01');
        
         if(this.joinDate && new Date(this.joinDate) < new Date(2021,6,30))
         {
             console.log('show me ');
             this.dateError =true;
             this.errorMessage = 'Date can not be greater than todays';
         }else{
              console.log('inside else');
              this.dateError = false;
         }


    }
} 