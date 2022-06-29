import { LightningElement,wire } from 'lwc';
import getContactData from '@salesforce/apex/contactDataTableController.getContactData';

//Name,Phone,Email
const columns = [
    { label: 'name', fieldName: 'name' },
    { label: 'phone', fieldName: 'phone', type: 'phone' },
    { label: 'email', fieldName: 'email', type: 'email' },
    { label: 'createdDate', fieldName: 'createdDate', type: 'date' },
];
export default class ContactDataTable extends LightningElement {
    columns = columns;
    data;
    @wire(getContactData)
    wiredData({error,data}){
        if (data) {
            let result = JSON.parse(data);
            this.data = result;
        } else if (error) {
            console.log(error);
            this.error = error;
        }
    }
    connectedCallback() {
        // getContactData().then((data) => {
        //     let result = JSON.parse(data);
        //     this.data = result;
        //     alert('::: result ' + JSON.stringify(result))
        // }).catch(e=>console.log(e))
    }
}