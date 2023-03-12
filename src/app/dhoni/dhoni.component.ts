import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dhoni',
  templateUrl: './dhoni.component.html',
  styleUrls: ['./dhoni.component.css']
})
export class DhoniComponent implements OnInit {
  public edited = false;
  userForm: FormGroup;
  listData2: any;
  listData3: any;
  highest1: any;
  
  constructor(private bid: FormBuilder) {
   this.listData2 = [];
   this.listData3 = [];
   this.highest1= Number;
   
   this.userForm = this.bid.group({
     name: ['', Validators.required],
     amount: ['', Validators.required]
   })
   const abcd = localStorage.getItem('MS DHONI');
   this.listData3 = JSON.parse(abcd);
   if(this.listData3 != null)
   {
     this.listData3 = this.listData3.sort(function (a, b){
       return a.amount - b.amount
     })
     this.listData3 = this.listData3.reverse();
     this.highest1 = this.listData3[0].amount;
     localStorage.setItem('highest1',this.highest1);
   }
   }
 public ngOnInit(): void {
 }

public addItem(): void {

 if(this.userForm.value.amount <= this.highest1) {
   this.edited = true;
 } else {
   this.edited = false;
   if(this.listData3 !=null ){
     this.listData2 = this.listData3;
   }
   this.listData2.push(this.userForm.value);
   const strng = JSON.stringify(this.listData2);
   localStorage.setItem('MS DHONI', strng); 
   const abcd = localStorage.getItem('MS DHONI');
   this.listData3 = JSON.parse(abcd);
   this.listData3 = this.listData3.sort(function (a, b){
     return a.amount - b.amount
   })
   this.listData3 = this.listData3.reverse(); 
   this.highest1 = this.listData3[0].amount;
   
   localStorage.setItem('highest1',this.highest1);
   this.userForm.reset();
 }
}
}
