import { LightningElement, track } from 'lwc';

export default class CreateReactiveApp extends LightningElement {

 @track RandomText ='This is my first Appliaction';

 @track arr=['LWC','saleforce','ABC','java'];

 @track myinfo=
     {
       id:101,
       name:'Ravi',
       dpet:'salefoce',
       age: "34"
    
    };

    handleTextChange =() =>{

    this.RandomText = 'This changed by me';
 }

 handleArrayChange =() =>{

    this.arr.push('HTML');
 }

 handleArry =() =>{

    this.myinfo.push('Habi');
 }

}