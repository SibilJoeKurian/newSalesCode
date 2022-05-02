import { LightningElement } from 'lwc';
import createTestData from '@salesforce/apex/createTestData.createData';
import { showToast } from 'c/utils';
export default class CreateTestData extends LightningElement {
    handleSubmit(){
        createTestData().then((data)=>{
            showToast.bind(this)('Success','Success');
        }).catch(e)
    }
}