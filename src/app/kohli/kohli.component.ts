import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder,} from '@angular/forms';


@Component({
  selector: 'app-kohli',
  templateUrl: './kohli.component.html',
  styleUrls: ['./kohli.component.css']
})

export class KohliComponent implements OnInit { 
  public edited = false;
   userForm: FormGroup;
   listData: any;
   listData1: any;
   highest: any;
   
   constructor(private bid: FormBuilder) {
    this.listData = [];
    this.listData1 = [];
    this.highest= Number;
    
    this.userForm = this.bid.group({
      name: ['', Validators.required],
      amount: ['', Validators.required]
    })
    const abcd = localStorage.getItem('VIRAT KOHLI');
    this.listData1 = JSON.parse(abcd);
    if(this.listData1 != null)
    {
      this.listData1 = this.listData1.sort(function (a, b){
        return a.amount - b.amount
      })
      this.listData1 = this.listData1.reverse();
      this.highest = this.listData1[0].amount;
      localStorage.setItem('highest',this.highest);
    }
    }
  public ngOnInit(): void {
  }

 public addItem(): void {

  if(this.userForm.value.amount <= this.highest) {
    this.edited = true;
  } else {
    this.edited = false;
    if(this.listData1 !=null ){
      this.listData = this.listData1;
    }
    this.listData.push(this.userForm.value);
    const strng = JSON.stringify(this.listData);
    localStorage.setItem('VIRAT KOHLI', strng); 
    const abcd = localStorage.getItem('VIRAT KOHLI');
    this.listData1 = JSON.parse(abcd);
    this.listData1 = this.listData1.sort(function (a, b){
      return a.amount - b.amount
    })
    this.listData1 = this.listData1.reverse(); 
    this.highest = this.listData1[0].amount;
    
    localStorage.setItem('highest',this.highest);
    this.userForm.reset();
    
  }
}
}
