 import { Component } from '@angular/core';
 import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list:any[]=[];
  counter:number=0;
  addTak(value:any){
    this.list.push({id:this.counter,name:value});
    this.counter++;
  }

  deleteItem(id:number){
    this.list = this.list.filter(item=> item.id!== id)
  }
  data = [
    {name:"mohammad",phone:918152,email:"mohd@sample.com"},
    {name:"jhon",phone:112233,email:"john@sample.com"},
    {name:"karan",phone:789879,email:"karan@sample.com"},
    {name:"samvit",phone:456456,email:"samvit@sample.com"},
    {name:"isamil",phone:525252,email:"isamil@sample.com"},
    {name:"mohan",phone:45612378,email:"mohan@sample.com"}
]
    
  ;
}
