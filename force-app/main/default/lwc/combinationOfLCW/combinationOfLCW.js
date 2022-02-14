import { LightningElement, track } from 'lwc';

export default class CombinationOfLCW extends LightningElement {

   trainees=[

    {
      id:101,
     name:'Habib',
     dpet:'salefoce',
     age: "34"
    
    },
    {
     id:102,
     name:'RAvi',
     dpet:'CS&IT',
     age: "14"
    
    },
    {
     id:103,
     name:'Rajesh',
     dpet:'salefoce',
     age: "15"
    
    }
   ];
   
   @track showTable = false;

   handleshow =()=>{

    this.showTable=!this.showTable;
    
    const ctlBtn = this.template.querySelector('.ctrl-btn');
    const outputText =this.template.querySelector('.output-text');
    if(this.showTable){
        ctrBtn.textContent='Hide Data';
        outputText.textContent='click on the button to hide data';

    }else{
        ctrBtn.textContent='show Data';
        outputText.textContent='click on the button to show data';
    }

   }
}