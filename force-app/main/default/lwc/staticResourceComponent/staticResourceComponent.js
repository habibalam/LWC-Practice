import { LightningElement } from 'lwc';
import static_resource from '@salesforce/resourceUrl/MobileImages';
import content_assets from '@salesforce/contentAssetUrl/mobileszip';


export default class StaticResourceComponent extends LightningElement {

    apple = static_resource + '/apple.png';
    samsung = static_resource  + '/samsung.png';
    oneplus = static_resource  + '/oneplus.png';


    apple= content_assets + 'pathinarchive=apple.png';
    sumsung= content_assets + 'pathinarchive=samsung.png';
    oneplus= content_assets + 'pathinarchive=oneplus.png';
}