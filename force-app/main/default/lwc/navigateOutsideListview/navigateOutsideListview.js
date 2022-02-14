import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateOutsideListview extends NavigationMixin(LightningElement) {

 connectedCallback(){

    this[NavigationMixin.GenerateUrl]({
        type:'standard__webPage',
        attributes:{
            url:'/apex/NavigateVFPage'
        }
    }).then(url => 
        {
        this.vfUrl=url
    })
 }

 navigateTovfPage =()=>{

    this[NavigationMixin.GenerateUrl]({
        type:'standard__webPage',
        attributes :{
            url: '/apex/NavigateVFPage'
        }
    }).then(url =>{
        window.open(url);
    })
 }

 navigateToAura = () =>
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__NavigationAuraComp'
            }
        })
    }

}