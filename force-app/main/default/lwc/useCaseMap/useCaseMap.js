import { LightningElement } from 'lwc';

export default class UseCaseMap extends LightningElement {

markers = [
    {
        location:{
            city:'Patna',
            State:'Bihar'
        },
        title :'The landMark Building',
        describtion: 'welcome back to patna city'
    },
    {
        location:{

            city:'Hyderabad',
            State:'Telangana'
        }
    },
    {
        location:{

            city:'kolkata',
            State:'west Bengal'
        }

    }
]

  mapOptions = {
      draggable : false,
      disableDefaultUI: true
  }

}