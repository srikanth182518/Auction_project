import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionPageComponent } from './auction-page/auction-page.component';
import { KohliComponent } from './kohli/kohli.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DhoniComponent } from './dhoni/dhoni.component';
import { HardikComponent } from './hardik/hardik.component';
import { AuctionListComponent } from './auction-list/auction-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AuctionPageComponent,
    KohliComponent,
    DhoniComponent,
    HardikComponent,
    AuctionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }