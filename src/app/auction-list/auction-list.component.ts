import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent {
  public edited = false;
  userForm: FormGroup;
  listData1: any;
  listData3: any;
  listData5: any;
  highest1: any;
  
  constructor(private bid: FormBuilder) {
   this.listData1 = [];
   this.listData3 = [];
   this.listData5 = [];
   this.highest1= Number;
   
   this.userForm = this.bid.group({
     name: ['', Validators.required],
     amount: ['', Validators.required]
   })
   const abc = localStorage.getItem('VIRAT KOHLI');
   this.listData1 = JSON.parse(abc);
   if(this.listData1 != null)
    {
      this.listData1 = this.listData1.sort(function (a, b){
        return a.amount - b.amount
      })
      this.listData1 = this.listData1.reverse();
    }

    const pqr = localStorage.getItem('MS DHONI');
   this.listData3 = JSON.parse(pqr);
   if(this.listData3 != null)
    {
      this.listData3 = this.listData3.sort(function (a, b){
        return a.amount - b.amount
      })
      this.listData3 = this.listData3.reverse();
    }

    const xyz = localStorage.getItem('HARDIK PANDYA');
   this.listData5 = JSON.parse(xyz);
   if(this.listData5 != null)
    {
      this.listData5 = this.listData5.sort(function (a, b){
        return a.amount - b.amount
      })
      this.listData5 = this.listData5.reverse();
    }
  }
}
