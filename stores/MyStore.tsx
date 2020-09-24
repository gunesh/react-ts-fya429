import {} from "mobx-react-lite";
import { observable } from "mobx";
import axios from 'axios';
export class MyStore {
  loader = false
  myFirstVar = "Test";
  listItem = [];
  itemDetails = {};
  testFormInit = {
    name:undefined,
    type:undefined,
    number:undefined,
    account:undefined
  }
  constructor() {}
  submitMyForm(form) {
    console.log(form);
  }

  fetchData(id) {
     this.loader = true
     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        this.itemDetails = res.data;
        this.loader = false
       console.log(res.data)
      })
      
  }

  getData(){
    return this.itemDetails
  }
}
