import { LightningElement } from 'lwc';

export default class GetprobComponent extends LightningElement {
 
    number1;
    number2;
    handlchange =(event) =>{
    
        let inputVal=event.target.value;
        if(event.target.name==='number1'){
            this.number1=inputVal;
        }else{
            this.number2=inputVal;
        }

    }

    get sumOfTwo(){
       /* if(this.number1 && this.numbrer2){
            return parseInt(this.number1) + parseInt(this.numbrer2);
        }
        return '';*/

        console.log('Getter is called');
        if ((this.number1 === '' || this.number1 === null) && (this.number2 === '' || this.number2 === null)) {
            return '';
        }

        else if ((isNaN(this.number1) == false) && (isNaN(this.number2) == false)) {
            console.log('Both input are number now');
            if (this.number1 && this.number2) {
                return parseInt(this.number1) + parseInt(this.number2);
            }
        } else {
            return 'Both Inputs should be Number for addition';
        }
    }

}