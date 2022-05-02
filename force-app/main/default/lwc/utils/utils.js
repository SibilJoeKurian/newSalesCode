import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

function showToast(toastMessage,toastVariant){
    this.dispatchEvent(new ShowToastEvent({
      title: toastMessage,
      message: toastMessage,
      variant: toastVariant,
    }));
};

export {
    showToast
}