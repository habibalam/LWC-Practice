import { LightningElement, track } from 'lwc';

export default class FirstLWCprg extends LightningElement 
{
  @track name;
  @track age;
  @track origin;
  @track randomText ="First LWC Component";
  @track ishow= false;
   arr=['apple','mango','papaya','banana'];


  /*handleSubmit = ()=>{
    console.log('Click');
    this.ishow=true;
    let index=Math.floor(Math.random()*this.arr.length);
    console.log(this.arr[index]);
    this.randomText=this.arr[index];
  }
    
  handleEVent =()=>{
   // this.arr=event.target.value;
    var NumArr = Math.floor(Math.random() * 4);
    this.randomText = this.arr[NumArr];
  }
  
  trackChange =(event)=>{

    console.log(event.target.value);
    let inputVal=event.target.value;

    switch(event.target.name){
      case "name": this.name=inputVal;
      break;
      case "age": this.age=inputVAl;
      break;
      case "origin" : this.origin=inputVal;
      break;
      default:
    }
  }*/
  handleSubmit = ()=>{
    console.log('Click');
    this.ishow=!this.ishow ;
    
  }

}