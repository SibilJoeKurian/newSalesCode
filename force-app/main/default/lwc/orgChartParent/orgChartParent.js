import { LightningElement,track } from 'lwc';
import OrgChartData from '@salesforce/apex/OrgChartData.getChartData';
export default class OrgChartParent extends LightningElement {
    @track contacts = [];
    @track levelOne = [];
    @track levelTwo = [];
    @track levelThree = [];
    @track levelFour = [];
    @track levelFive = [];
    connectedCallback(){
        OrgChartData().then(data=>{
            this.contacts = [...data];
            data.forEach(e => {
                if(e.role === '1'){
                    this.levelOne = [...this.levelOne,{id:e.uId,name:e.name,email:e.email,role:e.role}];
                }else if(e.role === '2'){
                    this.levelTwo = [...this.levelTwo,{id:e.uId,name:e.name,email:e.email,role:e.role}];
                }else if(e.role === '3'){
                    this.levelThree = [...this.levelThree,{id:e.uId,name:e.name,email:e.email,role:e.role}];
                }else if(e.role === '4'){
                    this.levelFour = [...this.levelFour,{id:e.uId,name:e.name,email:e.email,role:e.role}];
                }else if(e.role === '5'){
                    this.levelFive = [...this.levelFive,{id:e.uId,name:e.name,email:e.email,role:e.role}];
                }
            });
            console.log('::: level one '+this.levelOne);
            console.log('::: level one '+this.levelTwo);
            console.log('::: level one '+this.levelThree);
            console.log('::: level one '+this.levelFour);
        })
        
    }
}