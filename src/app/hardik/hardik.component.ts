import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hardik',
  templateUrl: './hardik.component.html',
  styleUrls: ['./hardik.component.css']
})
export class HardikComponent {
  public edited = false;
  userForm: FormGroup;
  listData4: any;
  listData5: any;
  highest2: any;
  
  constructor(private bid: FormBuilder) {
   this.listData4 = [];
   this.listData5 = [];
   this.highest2= Number;
   
   this.userForm = this.bid.group({
     name: ['', Validators.required],
     amount: ['', Validators.required]
   })
   const abcd = localStorage.getItem('HARDIK PANDYA');
   this.listData5 = JSON.parse(abcd);
   if(this.listData5 != null)
   {
     this.listData5 = this.listData5.sort(function (a, b){
       return a.amount - b.amount
     })
     this.listData5 = this.listData5.reverse();
     this.highest2 = this.listData5[0].amount;
     localStorage.setItem('highest2',this.highest2);
   }
   }
 public ngOnInit(): void {
 }

public addItem(): void {

 if(this.userForm.value.amount <= this.highest2) {
   this.edited = true;
 } else {
   this.edited = false;
   if(this.listData5 !=null ){
     this.listData4 = this.listData5;
   }
   this.listData4.push(this.userForm.value);
   const strng = JSON.stringify(this.listData4);
   localStorage.setItem('HARDIK PANDYA', strng); 
   const abcd = localStorage.getItem('HARDIK PANDYA');
   this.listData5 = JSON.parse(abcd);
   this.listData5 = this.listData5.sort(function (a, b){
     return a.amount - b.amount
   })
   this.listData5 = this.listData5.reverse(); 
   this.highest2 = this.listData5[0].amount;
   
   localStorage.setItem('highest2',this.highest2);
   this.userForm.reset();
   
 }
}
}
