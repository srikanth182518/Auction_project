import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KohliComponent } from './kohli/kohli.component';
import { AuctionPageComponent } from './auction-page/auction-page.component';
import { DhoniComponent } from './dhoni/dhoni.component';
import { HardikComponent } from './hardik/hardik.component';
import { AuctionListComponent } from './auction-list/auction-list.component';

const routes: Routes = [
  {path: '', component: AuctionPageComponent},
  {path: 'auction-page', component: AuctionPageComponent},
  {path: 'auction-list', component: AuctionListComponent},
  {path: 'kohli', component: KohliComponent},
  {path: 'dhoni', component: DhoniComponent},
  {path: 'hardik', component: HardikComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
