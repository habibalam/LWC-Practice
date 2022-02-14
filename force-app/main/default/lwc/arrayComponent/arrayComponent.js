import { LightningElement, track } from 'lwc';

export default class ArrayComponent extends LightningElement {

  @track isshown=false;
    
 myInfo =[
    {
     id:"101",
     name:"raj",
     department:"CS&IT",
     age:"34"
     
    },
    {
        id:"102",
        name:"Aftab",
        department:"CS&IT",
        age:"33"
        
       },

       {
        id:"103",
        name:"rajaa",
        department:"Arbic",
        age:"22"
        
       }
];
 
handleText = () =>{
    console.log('Click');
    this.isshown=!this.isshown;
    
  }

}