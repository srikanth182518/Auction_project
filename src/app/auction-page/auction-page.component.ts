import { Component } from '@angular/core';
@Component({
  selector: 'app-auction-page',
  templateUrl: './auction-page.component.html',
  styleUrls: ['./auction-page.component.css']
})
export class AuctionPageComponent {
 rupees: String;
 rupees1: String;
 rupees2: String;

  public ngOnInit(): void {
    this.rupees = localStorage.getItem('highest');
    this.rupees1 = localStorage.getItem('highest1');
    this.rupees2 = localStorage.getItem('highest2');
  }
  
}
