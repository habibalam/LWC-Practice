import { LightningElement ,api} from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import chartjs  from '@salesforce/resourceUrl/ChartJs';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class UseCaseChart extends LightningElement {

@api chartConfig;     
chart;

renderedCallback(){
    loadScript(this, chartjs).then(()=>
    {
      console.log('show content');  
      const ctx = this.template.querySelector('.myChart').getContext('2d');
      this.chart = new window.Chart(ctx, JSON.parse(JSON.stringify(this.chartConfig)));
    }).catch(error =>
        
    {
        this.dispatchEvent(new ShowToastEvent({
          title: 'Error Load chart',
          message: error.body.message,
          variant : 'error'
        }));

    });
  }

}