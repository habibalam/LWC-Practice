import { LightningElement,api } from 'lwc';

export default class Child1 extends LightningElement {

 @api name;

    /*handleChange = (event) => {
       this.name=event.target.value;
       const sampleevent=new CustomEvent('showtextevent',{
          detail:this.name
       });
       this.dispatchEvent(sampleevent);
    
    }*/
    handleClick(event){
      this.name=this.template.querySelector(".fn").value;
      const sampleevent=new CustomEvent('inputevent',{
         detail:this.name

      });
      this.dispatchEvent(sampleevent);
    }
    
    
}