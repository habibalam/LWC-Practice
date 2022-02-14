import { LightningElement } from 'lwc';
/*import LOCAL from '@salesforce/i18n/locale';
import LANG from '@salesforce/i18n/lang';
import DIR from '@salesforce/i18n/dir';*/


import LOCALE from '@salesforce/i18n/locale';
import LANG from '@salesforce/i18n/lang';
import DIR from '@salesforce/i18n/dir';


export default class I18component extends LightningElement {

    /*date = new Date();
    formattedDate = new Intl.DateTimeFormat(LOCALE).format(this.date);
    lang = LANG;
    dir = DIR;*/


    date = new Date();
    formattedDate = new Intl.DateTimeFormat(LOCALE).format(this.date);
    lang = LANG;
    dir = DIR;

}